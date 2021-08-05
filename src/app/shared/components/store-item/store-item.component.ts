import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

import {StoreItemInterface} from './store-item.interface';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreItemComponent implements OnInit {

  @Input() item: string;

  displayPricing: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
