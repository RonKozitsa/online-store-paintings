import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {
  constructor(public breakpointObserver: BreakpointObserver) {}

  isSmallDevice(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 599px)');
  }
}
