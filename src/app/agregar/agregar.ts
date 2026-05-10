import { Component, inject, ChangeDetectorRef  } from '@angular/core';
import {RouterLink, RouterOutlet, ActivatedRoute} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule ],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {

  items:any = '';
  productId:any;
  formulario:any;
  checkoutForm2:any;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private httpservService: HttpServiceService, 
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder) {
    this.checkoutForm2 = this.formBuilder.group({
      //id:'',
      title: '',
      synopsis: '',
      year: '',
      cover: '',
    });

  }

  ngOnInit() {
    
  }

  onSubmit(movieData:any){
    
    console.log(movieData);
    //aqui hay que parsear movieData

    //http://127.0.0.1:8000/api/putPeliculas/1?title=Inception&synopsis=Pelicula de accion&year=2016&cover=imagenes.jpg
    
    //movieData = this.productId + '?title=' + movieData.title + '&synopsis=' + movieData.synopsis + '&year=' + movieData.year + '&cover=' + movieData.cover;

    //console.log(movieData);

    this.httpservService.addMovie(movieData)
      .subscribe(data => {
        //this.formulario = data;        
      })


    this.checkoutForm2.reset();
  }
}
