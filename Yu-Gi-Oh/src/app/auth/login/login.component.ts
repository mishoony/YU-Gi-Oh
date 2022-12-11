import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup =  this.formBuilder.group({
    'username': new FormControl('', Validators.required)
  })
  constructor(private formBuilder :FormBuilder) { }

  ngOnInit(): void {
  }

}
