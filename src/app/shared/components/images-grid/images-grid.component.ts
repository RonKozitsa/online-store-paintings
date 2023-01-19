import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { StoreItemInterface } from '../store-item/store-item.interface';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesGridComponent implements OnInit {
  @Input() gridItems: StoreItemInterface[] = [];
  @Input() gridStyle: object;

  priorityImagesCount: number;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.priorityImagesCount = this.breakpointObserver.isMatched('(max-width: 599px)') ? 6 : 12;
  }
}
