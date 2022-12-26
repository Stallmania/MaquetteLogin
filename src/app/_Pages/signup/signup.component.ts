import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  title = 'form-subscribe';

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]], // Valeur par défaut
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]],
      phones: this.formBuilder.array([]),

      terms: ['', [
        Validators.requiredTrue
      ]]
    });

    this.addPhone();
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });
    if (this.phones.length < 3) {
      this.phones.push(phone)
    }
  }

  deletePhone(index: number) {
    this.phones.removeAt(index)
  }


  //GETERS 
  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }



  get phones() {
    return this.registerForm.get('phones') as FormArray;
  }

  getPhoneNumber(index:number){
    return this.phones.controls[index].get('phoneNumber');
  }
  
  getPhonePrefix(index:number){
    return this.phones.controls[index].get('phonePrefix');
  }


  get terms() {
    return this.registerForm.get('terms') as FormControl;
  }


  submit() {
    if (!this.registerForm.valid) {
      alert('Form is invalid')
      return;
    }

    alert('Success');
  }
}
