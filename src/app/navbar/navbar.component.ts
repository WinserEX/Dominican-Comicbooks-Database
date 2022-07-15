import { authInstanceFactory } from '@angular/fire/auth/auth.module';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
