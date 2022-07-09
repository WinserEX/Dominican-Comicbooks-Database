import { Component, OnInit } from '@angular/core';

import { Comicbook } from '../comicbooks';

@Component({
  selector: 'app-comicbooks',
  templateUrl: './comicbooks.component.html',
  styleUrls: ['./comicbooks.component.scss']
})
export class ComicbooksComponent implements OnInit {
  comicbooks: Comicbook[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
