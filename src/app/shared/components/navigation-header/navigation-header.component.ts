import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationItemInterface } from '../navigation/navigation.interface';
import { MainPagesNavigationNamesEnums } from '../../interfaces/pages-navigation-names.interface';
import { ButtonType } from '../app-button/app-button.interface';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  readonly ButtonType = ButtonType;

  @Output() navigationClicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigationMenu: NavigationItemInterface[] = [
    {
      name: 'Home',
      url: MainPagesNavigationNamesEnums.home
    },
    {
      name: 'Collection',
      url: MainPagesNavigationNamesEnums.collection
    },
    {
      name: 'About Me',
      url: MainPagesNavigationNamesEnums.about
    },
    {
      name: 'Contact',
      url: MainPagesNavigationNamesEnums.contact
    }
  ];

  homeButtonClicked() {
    this.navigationClicked.emit();
    this.router.navigate(['/home']);
  }
}
