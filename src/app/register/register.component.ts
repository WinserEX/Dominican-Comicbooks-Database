import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  Register() {
    const {email, password} = this.user
    this.AuthService.register(email, password).then( res => {
      console.log(`Se registró: ${res}`);
    })
  }

  getUserLogged() {
    this.AuthService.getUserLogged().subscribe(res => {
      console.log(res?.email);
    });    
  }

}
