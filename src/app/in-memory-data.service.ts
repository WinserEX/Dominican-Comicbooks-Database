import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Comicbook } from "./comicbooks";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const comicbooks = [
      {id: 1, author: "Jorge Perez", title: "El Verdugazo"},
      {id: 2, author: "Guillermo Perez", title: "Espíritu Rebelde"},
      {id: 3, author: "Manuel Shoo", title: "Cuco"},
      {id: 4, author: "Jean Sena", title: "Mountain Academy"},
      {id: 5, author: "Varenne Rincon", title: "Mi Demonio y yo"},
      {id: 6, author: "Nicole Hernandez", title: "Pantaleta"},
      {id: 7, author: "Gabriel Castillo", title: "Palma Sola"},
      {id: 8, author: "Guillermo Perez", title: "Palma Sola"},
      {id: 9, author: "Barbara Perez", title: "The Cardboard Kingdom"}
    ];
    return {comicbooks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(comicbooks: Comicbook[]): number {
    return comicbooks.length > 0 ? Math.max(...comicbooks.map(comicbook => comicbook.id)) + 1 : 10;
  }
}