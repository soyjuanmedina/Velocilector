import { Injectable } from "@angular/core";

@Injectable( {
  providedIn: 'root'
} )
export class ReadService {

  textToRead: string = '';
  wpm: number = 500;
  fontSize: number = 5;

  constructor () { }

}
