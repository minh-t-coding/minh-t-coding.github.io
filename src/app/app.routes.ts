import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Contact } from './component/contact/contact';
import { Projects } from './component/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Me',
  },
];
