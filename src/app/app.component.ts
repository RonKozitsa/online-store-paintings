import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger } from '@angular/animations';

import { animations } from './shared/animations/animations';
import { ButtonType } from './shared/components/app-button/app-button.interface';
import { BehaviorSubject } from 'rxjs';

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

  toggleMenu(event?: Event) {
    this.showNavigationMenu$.next(!this.showNavigationMenu$.value);
    if (event) {
      event.stopPropagation();
    }
  }
}
