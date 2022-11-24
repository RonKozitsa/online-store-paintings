import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

import { animations } from './shared/animations/animations';
import { ButtonType } from './shared/components/app-button/app-button.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fadeInOut', animations.fadeInOut)]
})
export class AppComponent {
  readonly ButtonType = ButtonType;

  showNavigationMenu$ = new BehaviorSubject<boolean>(false);

  constructor(public breakpointObserver: BreakpointObserver) {}

  toggleMenu(event?: Event) {
    this.showNavigationMenu$.next(!this.showNavigationMenu$.value);
    if (event) {
      event.stopPropagation();
    }
  }

  isSmallDevice(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 599px)');
  }
}
