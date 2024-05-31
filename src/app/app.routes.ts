import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { HowWorksComponent } from './pages/how-works/how-works.component';
import { ReadComponent } from './pages/read/read.component';

export const routes: Routes = [
  { path: '', title: "Velocilector", component: HomeComponent },
  { path: 'read', component: ReadComponent },
  { path: 'how-works', component: HowWorksComponent },
];
