import { Component, OnInit } from '@angular/core';

import { Comicbook } from '../comicbooks';
import { ComicbookService } from '../comicbook.service';
import { MessageService } from '../message.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, reduce } from 'rxjs';


@Component({
  selector: 'app-comicbooks',
  templateUrl: './comicbooks.component.html',
  styleUrls: ['./comicbooks.component.scss']
})

export class ComicbooksComponent implements OnInit {
  dominicancomics: Observable<any[]>;
  style: string = 'cover';
      

  constructor(private comicbookService: ComicbookService, firestore: AngularFirestore) { 
    this.dominicancomics = firestore.collection('dominicancomics').valueChanges();
    
  }

  ngOnInit(): void {
    // this.getComics(); 
    

  }



  // getComics(): void {
  //   this.comicbookService.getComics()
  //   .subscribe(comicbooks => this.comicbooks = comicbooks);
  // }
}
