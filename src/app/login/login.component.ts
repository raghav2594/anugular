import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router :Router) { }

  userName = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  handleLogin() {
      // console.log(this.userName);
      if(this.userName === 'in28minutes' && this.password === 'dummy') {
        this.router.navigate(['welcome' , this.userName])
        this.invalidLogin = false
      }
      else{
        this.invalidLogin = true
      }

  }
}
