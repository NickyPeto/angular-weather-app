import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
}
