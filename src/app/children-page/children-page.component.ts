import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';
import {childrenPaintings} from './children-page.consts';

@Component({
    selector: 'app-children-page',
    templateUrl: './children-page.component.html',
    styleUrls: ['./children-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenPageComponent {

    gridItems: StoreItemInterface[] = childrenPaintings;
}
