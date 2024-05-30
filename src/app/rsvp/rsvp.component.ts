import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { testTexts } from './conf/test-text';
import { CommonModule } from '@angular/common';

@Component( {
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
} )
export class RsvpComponent {

  form: FormGroup = new FormGroup( {
    textForRsvp: new FormControl( '' ),
  } );

  showedWord?: string;
  wpm: number = 500;
  fontSize: number = 5;
  pause: boolean = false;
  modalClosed: boolean = false;
  testTexts = testTexts;

  delay = ( ms: number | undefined ) => new Promise( res => setTimeout( res, ms ) );

  async showRsvp (): Promise<void> {
    this.showedWord = "";
    let text = this.form.controls['textForRsvp'].value.replace( /(\r\n|\n|\r)/gm, " " );
    if ( !text ) {
      this.showedWord = "Por favor, introduce el texto que quieras leer en el cuadro de texto";
    } else {
      const split = text.split( ' ' )
      let time = 60 / this.wpm * 1000
      this.playRsvp( split, time );
    }

  }

  async playRsvp ( split: string[], time: number ) {
    this.pause = false;
    this.modalClosed = false;
    const start = new Date();
    await this.sleep( 1000 );
    for ( let i = 0; i <= split.length; i++ ) {
      if ( this.modalClosed ) {
        break;
      }
      if ( !this.pause ) {
        await this.sleep( time );
        this.showedWord = split[i]
      } else {
        i = i - 1;
        await this.sleep( 100 );
      }
    }
    const end = new Date();
    const segundos = ( end.getTime() - start.getTime() ) / 1000;
    this.showedWord = "Se han reproducido " + split.length + " palabras en " + segundos + " milisegundos";
  }

  sleep ( ms: number ) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  loadTestText ( index: number ) {
    this.form.controls['textForRsvp'].setValue( testTexts[index].text )

  }

  pauseIt () {
    this.pause = !this.pause;
  }

  closeModal () {
    this.modalClosed = true;
  }


}