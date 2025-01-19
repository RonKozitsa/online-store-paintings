import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

import { animations } from './shared/animations/animations';
import { ButtonType } from './shared/components/app-button/app-button.interface';
import { ThemeService } from './shared/services/theme.service';
import { BreakpointObserverService } from './shared/services/breakpoint-observer.service';
import { NavigationHeaderComponent } from './shared/components/navigation-header/navigation-header.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { AppButtonComponent } from './shared/components/app-button/app-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavigationHeaderComponent, AppButtonComponent, AsyncPipe, ClickOutsideDirective, RouterOutlet, NgIf, RouterLink],
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
