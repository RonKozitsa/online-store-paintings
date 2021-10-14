import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

import {SideMenuItemI} from './side-menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {

  @Input() sideMenuItems: SideMenuItemI[]

  constructor() { }

  ngOnInit(): void {
  }

}
