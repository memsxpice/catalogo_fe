import {Routes} from '@angular/router';

import {Index} from './index/index';
import {Movie} from './movie/movie';
import {Movies} from './movies/movies';

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
    path: 'movie',
    component: Movie,
    title: 'Movie',
  },
];
export default routeConfig;