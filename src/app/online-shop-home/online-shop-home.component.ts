import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ShopCategoryOptionInterface} from '../shared/components/shop-category-option/shop-category-option.interface';
import {NavigationItemInterface} from '../shared/components/navigation/navigation.interface';

@Component({
    selector: 'app-online-shop-home',
    templateUrl: './online-shop-home.component.html',
    styleUrls: ['./online-shop-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineShopHomeComponent implements OnInit {

    categories: NavigationItemInterface[] = [
        {
            url: 'children',
            name: 'Children',
        },
        {
            url: 'flowers',
            name: 'Flowers',
        },
        {
            url: 'other',
            name: 'Other',
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
