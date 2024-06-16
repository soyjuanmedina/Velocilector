import { Injectable } from "@angular/core";
import { TestText } from "./models/test-text";

@Injectable( {
  providedIn: 'root'
} )
export class ReadService {

  textToRead: string = '';
  wpm: number = 500;
  fontSize: number = 5;
  punctuationPauses: boolean = true;
  testText?: TestText;

  constructor () { }

}
