import { Component, OnInit } from '@angular/core';
import { TestText } from '../../services/models/test-text';
import { testTexts } from '../../pages/home/conf/test-text';
import { Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'selection-modal-component',
  standalone: true,
  templateUrl: './selection-modal.component.html',
  styleUrls: ['./selection-modal.component.scss']
} )
export class SelectionModalComponent implements OnInit {

  @Output() emittTestTextToLoad = new EventEmitter<number>();
  @Output() emittTextToReadTest = new EventEmitter<number>();

  testTexts: TestText[] = testTexts;

  constructor () { }

  ngOnInit (): void {
  }

  loadTestText ( index: number ) {
    this.emittTestTextToLoad.emit( index );
  }

  readTest ( index: number ) {
    this.emittTextToReadTest.emit( index );
  }

}
