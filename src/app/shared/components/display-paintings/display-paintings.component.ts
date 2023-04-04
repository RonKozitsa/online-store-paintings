import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
  @Input() soldOut: boolean;
  @Input() isSet: boolean;

  @Output() pictureClicked = new EventEmitter<null>();

  imagePathToDisplay: string;

  ngOnInit() {
    this.imagePathToDisplay = this.itemConfig.imagesPath.find((path) => path.includes('preview')) || this.itemConfig.imagesPath[0];
  }
}
