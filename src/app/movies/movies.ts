import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
    items:any;

  constructor() {
    
   }

  ngOnInit() {
    this.items = [
      {nombre:'peli1'},
      {nombre:'peli2'},
      {nombre:'peli3'},
      {nombre:'peli4'},
      {nombre:'peli5'},
      {nombre:'peli6'},
      {nombre:'peli7'},
    ]
  }
}
