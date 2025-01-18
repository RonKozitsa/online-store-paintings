import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { StoreItemInterface } from './store-item.interface';
import { StoreItemService } from '../../services/store-item.service';
import { DisplayPaintingsComponent } from '../display-paintings/display-paintings.component';
import { AppButtonComponent } from '../app-button/app-button.component';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DisplayPaintingsComponent, AppButtonComponent],
  standalone: true
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
