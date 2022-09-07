import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LoginPayload } from './login/login-payload';
export const data:LoginPayload = {
  username:"ziad",
  password:"1234"
} 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }
   signIn(login:LoginPayload):string{
    console.log(login) 
    if(data.username==login.username&&data.password==login.password){
        return "login Successful";
      }else{
        return "login faild";
      }
  }
}
