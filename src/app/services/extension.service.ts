/// <reference types="chrome"/>
import { Injectable } from '@angular/core';
declare const window: any;


@Injectable( {
  providedIn: 'root'
} )
export class ExtensionService {

  constructor () { }

  isRunningAsExtension (): boolean {
    if ( window.chrome && chrome.runtime && chrome.runtime.id ) {
      return true;
    }
    return false
  }
}
