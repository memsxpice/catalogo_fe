import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, ActivatedRoute} from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {}
