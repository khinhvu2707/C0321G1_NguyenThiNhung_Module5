import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  public registerForm: FormGroup;


  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'China'},
    {id: 3, name: 'Japan'}
  ];
  isDisabled = true;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwForm: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, [this.RepeatPassword]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])

    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.isDisabled = false;
  }

  RepeatPassword(abstractControl: AbstractControl): any {
    const value = abstractControl.value;
    return value.password === value.confirmPassword ? null : {passwordsNotEqual: true};
  }
}
