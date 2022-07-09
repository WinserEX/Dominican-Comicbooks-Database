import { Component, OnInit } from '@angular/core';

import { Comicbook } from '../comicbooks';
import { ComicbookService } from '../comicbook.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comicbooks',
  templateUrl: './comicbooks.component.html',
  styleUrls: ['./comicbooks.component.scss']
})
export class ComicbooksComponent implements OnInit {
  comicbooks: Comicbook[] = [
    {id: 1, author: "Jorge Perez", title: "El Verdugazo", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 2, author: "Guillermo Perez", title: "Espíritu Rebelde", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 3, author: "Manuel Shoo", title: "Cuco", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 4, author: "Jean Sena", title: "Mountain Academy", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 5, author: "Varenne Rincon", title: "Mi Demonio y yo", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 6, author: "Nicole Hernandez", title: "Pantaleta", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 7, author: "Gabriel Castillo", title: "Palma Sola", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 8, author: "Guillermo Perez", title: "Palma Sola", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."},
    {id: 9, author: "Barbara Perez", title: "The Cardboard Kingdom", description: "Aquí va la descripción de algunos de los mejores cómics de República Dominicana."}
  ];

  constructor(private comicbookService: ComicbookService) { }

  ngOnInit(): void {
    this.getComics();

  }


  getComics(): void {
    this.comicbookService.getComics()
    .subscribe(comicbooks => this.comicbooks = comicbooks);
  }
}
