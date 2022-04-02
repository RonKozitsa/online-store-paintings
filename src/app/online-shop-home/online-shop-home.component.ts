import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ShopCategoryOptionInterface} from '../shared/components/shop-category-option/shop-category-option.interface';
import {NavigationItemInterface} from '../shared/components/navigation/navigation.interface';
import {SideMenuItemI} from '../shared/components/side-menu/side-menu.interface';

@Component({
    selector: 'app-online-shop-home',
    templateUrl: './online-shop-home.component.html',
    styleUrls: ['./online-shop-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineShopHomeComponent implements OnInit {

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
            url: 'other',
            name: 'Other',
            iconName: ''
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
