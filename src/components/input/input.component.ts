import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.scss'],
})
export class InputComponent {
  public cityName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  weatherService = inject(WeatherService)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit(){
    this.cityName.value && this.weatherService.getWeatherData(this.cityName.value)
  }
}
