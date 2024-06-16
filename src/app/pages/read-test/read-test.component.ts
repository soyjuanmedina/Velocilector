import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { testTexts } from '../home/conf/test-text';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReadService } from '../../services/read.service';
import { ReadConfigComponent } from '../../components/read-config/read-config.component';
import { SelectionModalComponent } from '../../components/selection-modal/selection-modal.component';

@Component( {
  selector: 'app-read-test',
  standalone: true,
  imports: [SelectionModalComponent],
  templateUrl: './read-test.component.html',
  styleUrl: './read-test.component.scss'
} )
export class ReadTestComponent implements OnInit {

  startReading: boolean = false;
  endReading: boolean = false;
  startTime: Date = new Date();
  endTime: Date = new Date();
  readingSeconds?: number;

  constructor ( public router: Router, public readService: ReadService ) {
  }
  ngOnInit (): void {
  }

  startReadingFunction () {
    this.startReading = true;
    this.startTime = new Date();
  }

  endReadingFunction () {
    this.endReading = true;
    this.endTime = new Date();
    this.readingSeconds = ( this.endTime.getTime() - this.startTime.getTime() ) / 1000;
  }

  reStart () {
    this.endReading = false;
    this.startReading = false;
    this.endTime = new Date();
    delete this.readService.testText;
  }

  loadTestText ( index: number ) {
    this.readService.textToRead = testTexts[index].title + ', de ' + testTexts[index].author + '.' + testTexts[index].text;
    this.router.navigate( ['/'], { skipLocationChange: true } );
  }

  readTest ( index: number ) {
    this.readService.testText = testTexts[index];
    this.router.navigate( ['/read-test'], { skipLocationChange: true } );
  }
}
