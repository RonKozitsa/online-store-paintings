import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SideMenuItemI } from '../shared/components/side-menu/side-menu.interface';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-online-shop-home',
  templateUrl: './online-shop-home.component.html',
  styleUrls: ['./online-shop-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SideMenuComponent],
  standalone: true
})
export class OnlineShopHomeComponent {
  categories: SideMenuItemI[] = [
    {
      url: 'flowers',
      name: 'Flowers',
      iconName: 'flower'
    },
    {
      url: 'children',
      name: 'Children',
      iconName: 'child'
    },
    {
      url: 'animals',
      name: 'Animals',
      iconName: ''
    },
    {
      url: 'nature',
      name: 'Nature',
      iconName: ''
    }
  ];
}
