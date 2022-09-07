import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  result!:string;
  constructor(private fb:FormBuilder ,private loginService:LoginService) { 
    this.loginForm=fb.group({
      username:['nada',Validators.required],
      password:['5555',[Validators.required,Validators.maxLength(8)]]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.result =this.loginService.signIn(this.loginForm.value)

    }
  }
  ngOnInit(): void {
  }

}
