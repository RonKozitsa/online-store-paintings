import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';

@Component({
    selector: 'app-flowers-page',
    templateUrl: './flowers-page.component.html',
    styleUrls: ['./flowers-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowersPageComponent implements OnInit {

    gridItems: StoreItemInterface[] = [
        {
            description: 'desc',
            id: 1,
            price: 100,
            name: 'Item name'
        },
        {
            description: 'desc 2',
            id: 2,
            price: 200,
            name: 'Item name 2'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
