import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-movies',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit{
  
  items:any;

  constructor(
    private httpservService: HttpServiceService
  ) {}

  ngOnInit() {
    
    this.httpservService.getMovies()
      .subscribe(data => {
        this.items = data;
        console.log(data);
        
    })

    
    
  }
}

