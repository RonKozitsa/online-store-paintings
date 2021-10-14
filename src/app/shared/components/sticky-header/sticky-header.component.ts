import {Component, OnInit} from '@angular/core';
import {NavigationItemInterface} from '../navigation/navigation.interface';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

  navigationMenu: NavigationItemInterface[] = [
    {
      name: 'Home',
      url: 'home'

    },
    {
      name: 'Online Shop',
      url: 'shop'
    },
    {
      name: 'About',
      url: 'about'
    },
    {
      name: 'Contact',
      url: 'contact'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
