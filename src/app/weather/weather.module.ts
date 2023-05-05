import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather.component';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/components/components.module';
@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    ComponentsModule,
  ],
  exports: [WeatherComponent],
})
export class WeatherModule {}
