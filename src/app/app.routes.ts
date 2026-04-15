import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Products} from './product/products';

export const routes: Routes = [
  {path : "home", component : Home},
  {path : "prods", component : Products}
];
