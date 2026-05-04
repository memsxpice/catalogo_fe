import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {}
