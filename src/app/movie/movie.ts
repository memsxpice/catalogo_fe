import { Component, inject, ChangeDetectorRef  } from '@angular/core';
import {RouterLink, RouterOutlet, ActivatedRoute} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-movie',
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule ],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})

export class Movie{

  items:any = '';
  productId:any;
  formulario:any;
  checkoutForm:any;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private httpservService: HttpServiceService, 
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      id:'',
      title: '',
      synopsis: '',
      year: 0,
      cover: '',
    });

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

  onSubmit(movieData:any){
    
    console.log(movieData);
    //aqui hay que parsear movieData

    //http://127.0.0.1:8000/api/putPeliculas/1?title=Inception&synopsis=Pelicula de accion&year=2016&cover=imagenes.jpg
    
    movieData = this.productId + '?title=' + movieData.title + '&synopsis=' + movieData.synopsis + '&year=' + movieData.year + '&cover=' + movieData.cover;

    console.log(movieData);

    this.httpservService.updateMovie(movieData)
      .subscribe(data => {
        //this.formulario = data;        
      })
  }
}


