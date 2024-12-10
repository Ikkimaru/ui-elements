import { Routes } from '@angular/router';
import {ButtonsComponent} from './components/Basic-Inputs/buttons/buttons.component';

export const routes: Routes = [
  { path: '', component: ButtonsComponent},
  { path: 'basic-input-elements', component: ButtonsComponent }
];
