import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Works } from './component/works/works';
import { Contact } from './component/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'works',
    component: Works,
    title: 'Works',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Me',
  },
];
