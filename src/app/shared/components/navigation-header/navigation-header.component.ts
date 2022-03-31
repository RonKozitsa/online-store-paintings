import {Component, OnInit} from '@angular/core';
import {NavigationItemInterface} from '../navigation/navigation.interface';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  navigationMenu: NavigationItemInterface[] = [
    {
      name: 'Home',
      url: '/home'

    },
    {
      name: 'Shop',
      url: '/shop'
    },
    {
      name: 'About Me',
      url: '/about'
    },
    {
      name: 'Contact',
      url: '/contact'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
