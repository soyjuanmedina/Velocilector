import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { testTexts } from '../home/conf/test-text';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReadService } from '../../services/read.service';
import { ReadConfigComponent } from '../../components/read-config/read-config.component';

@Component( {
  selector: 'app-read',
  standalone: true,
  imports: [FormsModule, ReadConfigComponent,
    ReactiveFormsModule, CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
} )
export class ReadComponent implements OnInit {

  form: FormGroup = new FormGroup( {
    textToRead: new FormControl( '' ),
  } );

  showedWord?: string;
  pause: boolean = false;
  modalClosed: boolean = false;
  testTexts = testTexts;
  steps: number = 0;
  isFinished: boolean = false;
  textLength: number = 0;

  constructor ( public router: Router, public readService: ReadService ) {
  }
  ngOnInit (): void {
    this.read();
  }

  return () {
    this.router.navigate( ['/'], { skipLocationChange: true } );
  }

  async read (): Promise<void> {
    this.showedWord = "";
    let text = this.readService.textToRead.replace( /(\r\n|\n|\r)/gm, " " );
    if ( !text ) {
      this.showedWord = "Por favor, introduce el texto que quieras leer en el cuadro de texto";
    } else {
      const split = text.split( ' ' );
      this.textLength = split.length;
      let time = 60 / this.readService.wpm * 1000
      this.playRsvp( split, time );
    }

  }

  async playRsvp ( split: string[], time: number ) {
    this.isFinished = false;
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
        this.steps = i;
        this.showedWord = split[i]
        if ( this.readService.punctuationPauses ) {
          if ( this.showedWord?.includes( '.' ) ) {
            await this.sleep( time + 150 );
          } else if ( this.showedWord?.includes( ',' ) ||
            this.showedWord?.includes( ';' ) ||
            this.showedWord?.includes( ':' ) ) {
            await this.sleep( time );
          }
        }
      } else {
        this.showedWord = split[i];
        i = this.steps - 1;
        time = 60 / this.readService.wpm * 1000;
        await this.sleep( 100 );
      }
    }
    const end = new Date();
    this.isFinished = true;
    const segundos = ( end.getTime() - start.getTime() ) / 1000;
    this.showedWord = "Has leído " + split.length + " palabras en " + segundos + " milisegundos";
  }

  sleep ( ms: number ) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  loadTestText ( index: number ) {
    this.form.controls['textToRead'].setValue( testTexts[index].text )

  }

  pauseIt () {
    this.pause = !this.pause;
  }

  move ( steps: number ) {
    this.steps = this.steps + steps;
  }

  closeModal () {
    this.modalClosed = true;
  }

}
