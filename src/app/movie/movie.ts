import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-movie',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit{
   items:any;

  constructor(
    private httpservService: HttpServiceService
  ) {}

  ngOnInit() {

    
    
  }
}
