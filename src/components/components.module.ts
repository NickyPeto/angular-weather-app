import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, InputComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
