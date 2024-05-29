import { Routes } from '@angular/router';
import { RsvpComponent } from './rsvp/rsvp.component';
import { HowWorksComponent } from './pages/how-works/how-works.component';

export const routes: Routes = [
  { path: '', title: "Velocilector", component: RsvpComponent },
  { path: 'how-works', component: HowWorksComponent },
];
