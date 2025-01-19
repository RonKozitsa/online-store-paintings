import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { StoreItemInterface } from '../store-item/store-item.interface';
import { StoreItemComponent } from '../store-item/store-item.component';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoreItemComponent, NgStyle, NgForOf],
  standalone: true
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
