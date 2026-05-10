import {Routes} from '@angular/router';

import {Index} from './index/index';
import {Movie} from './movie/movie';
import {Movies} from './movies/movies';
import {Agregar} from './agregar/agregar'

const routeConfig: Routes = [
  {
    path: '',
    component: Index,
    title: 'Catalogo',
  },
  {
    path: 'movies',
    component: Movies,
    title: 'Movies',
  },
  {
    path: 'movie/:id',
    component: Movie,
    title: 'Movie',
  },
  {
    path: 'agregar',
    component: Agregar,
    title: 'Agregar',
  },
];
export default routeConfig;