import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'any',
})
export class WeatherService {
  //TODO: type this
  cityData = new Subject<any>();
  private url: string = '';
  private query: string = 'stockholm';

  constructor(private http: HttpClient) {}

  public getWeatherData(city: string) {
    this.query = JSON.stringify(city.toLowerCase());

    this.url = environment.apiUrl + `&q=${this.query}&aqi=no`;
    this.http
      .get(this.url)
      .pipe(map((items: Object) => new Array(items)))
      .subscribe((value: any[]) => this.cityData.next(value));
  }
}
