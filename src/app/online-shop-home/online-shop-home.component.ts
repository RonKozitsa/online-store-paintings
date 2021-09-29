import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ShopCategoryOptionInterface} from '../shared/components/shop-category-option/shop-category-option.interface';

@Component({
    selector: 'app-online-shop-home',
    templateUrl: './online-shop-home.component.html',
    styleUrls: ['./online-shop-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineShopHomeComponent implements OnInit {

    categories: ShopCategoryOptionInterface[] = [
        {
            url: 'children',
            name: 'Children',
            imgPath: ''
        },
        {
            url: 'flowers',
            name: 'Flowers',
            imgPath: ''
        },
        {
            url: 'other',
            name: 'Other',
            imgPath: ''
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
