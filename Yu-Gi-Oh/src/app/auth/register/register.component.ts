import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null,Validators.required),
    'email': new FormControl(null,Validators.required),
    'password': new FormControl(null,Validators.required),
    'rePassword': new FormControl(null,Validators.required),

  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  rgisterHandler(): void {

    const { username, email, password } = this.registerFormGroup.value


    const body: { [key: string]: string } = {

      'username': username,
      'email': email,
      'password': password

    }

    console.log(body)
  }

}
