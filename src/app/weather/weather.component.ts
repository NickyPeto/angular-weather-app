import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  public $data!: Observable<any>;
  public isDaytime: boolean = true;
  private hours: number = 0;
  private readonly cancellation = new Subject<void>();

  public cityName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(public service: WeatherService) {}

  ngOnInit(): void {
    //To show an initial value
    this.searchCities('stockholm');
    this.getTimeOfTheDay();
  }

  ngOnDestroy(): void {
    this.cancellation.next();
    this.cancellation.complete();
  }

  searchCities(value: string | null) {
    this.cityName.setValue(value);
    if (value) {
      this.service.getWeatherData(value);
      this.$data = this.service.cityData.asObservable();
      this.getTimeOfTheDay();
    }
  }

  getTimeOfTheDay() {
    this.$data
      .pipe(
        map((val: any) => val[0].location.localtime),
        takeUntil(this.cancellation)
      )
      .subscribe((value) => {
        this.hours = new Date(value).getHours();
        this.isDaytime = this.hours > 6 ? true : false;
      });
  }
}
