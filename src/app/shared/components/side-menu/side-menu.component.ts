import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SideMenuItemI } from './side-menu.interface';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ]
})
export class SideMenuComponent {
  @Input() sideMenuItems: SideMenuItemI[];
  @Input() menuTitle: string;
}
