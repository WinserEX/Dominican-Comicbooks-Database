import { signOut } from 'firebase/auth';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  constructor(private AuthService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  Register() {
    const {email, password} = this.user
    this.AuthService.register(email, password).then( res => {
      console.log(`Se registró: ${res}`);
    })
  }

  Login() {
    const {email, password} = this.user
    this.AuthService.login(email, password).then( res => {
      console.log(`Inició sesión: ${res}`);
    })
  }

  LoginWithGoogle() {
    const {email, password} = this.user
    this.AuthService.loginWithGoogle(email, password).then( log => {
      console.log(`Inició sesión con Google: ${log}`);
    })
  }

  getUserLogged() {
    this.AuthService.getUserLogged().subscribe(res => {
      console.log(res?.email);
    });    
  }

  logout() {
    this.AuthService.logout();  
  }

}
