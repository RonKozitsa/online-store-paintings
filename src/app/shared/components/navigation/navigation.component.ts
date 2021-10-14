import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {NavigationItemInterface} from './navigation.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  @Input() navigationMenu: NavigationItemInterface[];

  constructor() {
  }
}
