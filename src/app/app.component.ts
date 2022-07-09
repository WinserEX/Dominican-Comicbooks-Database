import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dominicancomics: Observable<any[]>;
  title = 'base-de-datos-comic-dominicano';
  
  constructor(firestore: AngularFirestore) {
    this.dominicancomics = firestore.collection('dominicancomics').valueChanges();

  }

}
