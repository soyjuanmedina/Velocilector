import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component( {
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
} )
export class RsvpComponent {

  form: FormGroup = new FormGroup( {
    text: new FormControl( '' ),
  } );

  showRsvp (): void {

    console.log( 'showRsvp', );

  }
}