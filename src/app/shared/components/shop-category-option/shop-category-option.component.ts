import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

import {ShopCategoryOptionInterface} from './shop-category-option.interface';

@Component({
    selector: 'app-shop-category-option',
    templateUrl: './shop-category-option.component.html',
    styleUrls: ['./shop-category-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCategoryOptionComponent implements OnInit {

    @Input() shopCategoryOption: ShopCategoryOptionInterface;

    constructor() {
    }

    ngOnInit(): void {
    }

}
