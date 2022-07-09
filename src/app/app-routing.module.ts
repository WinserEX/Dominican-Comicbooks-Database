import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicbooksComponent } from './comicbooks/comicbooks.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: '', redirectTo: '/comicbooks', pathMatch: 'full' },
  { path: 'comicbooks', component: ComicbooksComponent },
  { path: 'nosotros', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
