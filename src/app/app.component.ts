import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  adult!: boolean;
  guests!: FormArray;

  profileForm = this.fb.group({
    guests: this.getGuestsArray(),
  });
  title = 'angular-form';

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  onAddguests() {
    this.guests.push(this.addGuests());
  }
  getGuestsArray() {
    this.guests = this.fb.array([this.addGuests()]);
    return this.guests;
  }

  addGuests() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: ['', Validators.email],
      vegetarian: '',
      person: '',
      transport: '',
    });
  }
}
