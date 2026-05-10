import { Component, inject, ChangeDetectorRef  } from '@angular/core';
import {RouterLink, RouterOutlet, ActivatedRoute} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})

export class Movie{
  
  items:any = '';
  productId:any;

  

  private activatedRoute = inject(ActivatedRoute);

  constructor(private httpservService: HttpServiceService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id']
    });


    this.httpservService.getMovie(this.productId).subscribe(data => {
        this.items = data;
        this.cdr.detectChanges();
    })
    
  }
}


