import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {}
