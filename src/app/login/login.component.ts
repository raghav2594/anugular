import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  handleLogin() {
      // console.log(this.userName);
      if(this.userName === 'in28minutes' && this.password === 'dummy') {
        this.invalidLogin = false
      }
      else{
        this.invalidLogin = true
      }

  }
}
