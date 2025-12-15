import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Dev } from './components/dev/dev';
import { Train } from './components/train/train';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'dev',component: Dev},
  { path: 'train',component: Train},
  { path: 'contact', component: Contact }
];
