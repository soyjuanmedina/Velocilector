import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { testTexts } from './conf/test-text';

@Component( {
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
} )
export class RsvpComponent {

  form: FormGroup = new FormGroup( {
    textForRsvp: new FormControl( '' ),
  } );

  showedWord?: string;

  wpm: number = 500;

  delay = ( ms: number | undefined ) => new Promise( res => setTimeout( res, ms ) );

  async showRsvp (): Promise<void> {
    let text = this.form.controls['textForRsvp'].value.replace( /(\r\n|\n|\r)/gm, " " );
    this.showedWord = "";
    const split = text.split( ' ' )
    let time = 60 / this.wpm * 1000
    this.playRsvp( split, time );
  }

  async playRsvp ( split: string[], time: number ) {
    const start = new Date();
    await this.sleep( 1000 );
    for ( let i = 0; i <= split.length; i++ ) {
      await this.sleep( time );
      this.showedWord = split[i]
    }
    const end = new Date();
    const segundos = ( end.getTime() - start.getTime() ) / 1000;
    this.showedWord = "Se han reproducido " + split.length + " palabras en " + segundos + " milisegundos";
  }

  sleep ( ms: number ) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  loadTestText () {
    this.form.controls['textForRsvp'].setValue( testTexts[0] )

  }
}