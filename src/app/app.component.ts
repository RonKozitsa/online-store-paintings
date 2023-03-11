import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

import { animations } from './shared/animations/animations';
import { ButtonType } from './shared/components/app-button/app-button.interface';
import { ThemeService } from './shared/services/theme.service';
import { BreakpointObserverService } from './shared/services/breakpoint-observer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('slideInOut', animations.slideInOut)]
})
export class AppComponent {
  readonly ButtonType = ButtonType;

  showNavigationMenu$ = new BehaviorSubject<boolean>(false);

  constructor(public breakpointObserverService: BreakpointObserverService, private themeService: ThemeService) {
    themeService.setInitialTheme();
  }

  toggleMenu(event?: Event) {
    this.showNavigationMenu$.next(!this.showNavigationMenu$.value);
    if (event) {
      event.stopPropagation();
    }
  }
}
