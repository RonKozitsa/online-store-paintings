import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {NavigationItemInterface} from './navigation.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  navigationMenu: NavigationItemInterface[];

  constructor() {
  }

  ngOnInit() {
    this.initNavigationMenu();
  }

  initNavigationMenu() {
    this.navigationMenu = [
      {
        name: 'Home',
        url: 'home'

      },
      {
        name: 'Online Shop',
        url: 'shop'
      },
      {
        name: 'about',
        url: 'about'
      },
      {
        name: 'contact',
        url: 'contact'
      },
    ];
  }

}
