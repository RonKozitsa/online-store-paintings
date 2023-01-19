import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { StoreItemInterface } from '../store-item/store-item.interface';

@Component({
  selector: 'app-display-paintings',
  templateUrl: './display-paintings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPaintingsComponent {
  @Input() itemConfig: StoreItemInterface;
  @Input() frameColor: string;
  @Input() loadImageAsPriority: boolean;
  @Input() isViewExpandedMode: boolean;
  @Input() isSet: boolean;

  @Output() pictureClicked = new EventEmitter<null>();
}
