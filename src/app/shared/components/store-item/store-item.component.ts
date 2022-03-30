import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {StoreItemInterface} from './store-item.interface';

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['./store-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreItemComponent implements OnInit {
    @Input() item: StoreItemInterface;

    @Output() showFullDetails = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    showDetails() {
    }

}
