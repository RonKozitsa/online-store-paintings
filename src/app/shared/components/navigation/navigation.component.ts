import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NavigationItemInterface } from './navigation.interface';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink
  ],
  standalone: true
})
export class NavigationComponent {
  @Input() navigationMenu: NavigationItemInterface[];

  @Output() navigationClicked = new EventEmitter<void>();
}
