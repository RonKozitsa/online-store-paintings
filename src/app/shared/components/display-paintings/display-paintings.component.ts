import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { StoreItemInterface } from '../store-item/store-item.interface';

@Component({
  selector: 'app-display-paintings',
  templateUrl: './display-paintings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPaintingsComponent implements OnInit {
  @Input() itemConfig: StoreItemInterface;
  @Input() frameColor: string;
  @Input() loadImageAsPriority: boolean;
  @Input() isViewExpandedMode: boolean;

  @Output() pictureClicked = new EventEmitter<null>();

  isSet: boolean;

  ngOnInit(): void {
    this.isSet = this.itemConfig.imagesPath.length > 1;
  }
}
