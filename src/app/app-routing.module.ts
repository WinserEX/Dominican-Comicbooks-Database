import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicbooksComponent } from './comicbooks/comicbooks.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'comicbooks', component: ComicbooksComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'registro', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
