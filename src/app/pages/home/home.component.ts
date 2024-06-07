import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { testTexts } from './conf/test-text';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadService } from '../../services/read.service';
import { ExtensionService } from '../../services/extension.service';
import { ReadConfigComponent } from '../../components/read-config/read-config.component';

@Component( {
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReadConfigComponent,
    ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
} )
export class HomeComponent {

  form: FormGroup = new FormGroup( {
    textToRead: new FormControl( '' ),
  } );

  testTexts = testTexts;

  constructor ( public router: Router, private activatedRoute: ActivatedRoute, public readService: ReadService, public extensionService: ExtensionService ) {
    let chromeStorage = chrome?.storage?.session.get( 'selectionText' );
    if ( chromeStorage ) {
      this.form.controls['textToRead'].setValue( chromeStorage )
    }
    if ( this.readService.textToRead ) {
      this.form.controls['textToRead'].setValue( this.readService.textToRead );
    }
  }

  read () {
    this.readService.textToRead = this.form.controls['textToRead'].value;
    this.router.navigate( ['/read'], { skipLocationChange: true } );
  }

  loadTestText ( index: number ) {
    this.form.controls['textToRead'].setValue( testTexts[index].text )

  }

}