import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

import {StoreItemInterface} from '../store-item/store-item.interface';

@Component({
    selector: 'app-display-paintings',
    templateUrl: './display-paintings.component.html',
    styleUrls: ['./display-paintings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPaintingsComponent implements OnInit {
    @Input() itemConfig: StoreItemInterface;

    isSet: boolean;

    ngOnInit(): void {
        this.isSet = this.itemConfig.imagesPath.length > 1;
    }

}
