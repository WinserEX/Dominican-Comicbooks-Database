import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicbooksComponent } from './comicbooks/comicbooks.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'comicbooks', component: ComicbooksComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
