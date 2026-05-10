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

    this.httpservService.addMovie(movieData)
      .subscribe(data => {})


    this.checkoutForm2.reset();
  }
}
