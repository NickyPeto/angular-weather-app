import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class WeatherService {
  cityData = new Subject<any>();
  url: string = '';
  private query: string = 'stockholm';
  //This should be normally set in env variables but I'll do it like this rn to save time :)
  private apiKey: string = '63252697c8994fc3b7b115338230405';

  constructor(private http: HttpClient) {}

  public getWeatherData(city: string) {
    this.query = JSON.stringify(city.toLowerCase());
    //This should be normally set in env variables but I'll do it like this rn to save time :)
    this.url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.query}&aqi=no`;
    this.http
      .get(this.url)
      .pipe(map((items: Object) => new Array(items)))
      .subscribe((value: any[]) => {
        return this.cityData.next(value);
      });
  }
}
