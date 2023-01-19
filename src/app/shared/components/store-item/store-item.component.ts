import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit} from '@angular/core';

import { StoreItemInterface } from './store-item.interface';
import { StoreItemService } from '../../services/store-item.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemComponent implements OnInit {
  @Input() itemConfig: StoreItemInterface;
  @Input() loadImageAsPriority: boolean;

  @Output() showFullDetails = new EventEmitter<number>();

  isSet: boolean;

  constructor(private storeItemService: StoreItemService) {}

  ngOnInit() {
    this.isSet = this.itemConfig?.imagesPath?.length > 1;
  }

  showDetails() {
    this.storeItemService.showItemDetails(this.itemConfig);
  }
}
