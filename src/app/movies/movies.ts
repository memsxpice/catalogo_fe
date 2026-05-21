import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movies',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit{
  
  items:any;

  constructor(
    private httpservService: HttpServiceService, private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    
    this.httpservService.getMovies()
      .subscribe(data => {
        this.items = data;
        this.cdr.detectChanges();
        
    })
  }

  onSubmit(movieData:any){

    const isConfirmed = window.confirm("Are you sure you want to proceed?");
    if (isConfirmed) {
      console.log("Confirmed!");
      this.httpservService.delMovie(movieData)
      .subscribe(data => {
        this.cdr.detectChanges();
      })
    } else {
      console.log("Cancelled.");
    }
    
  }

}

