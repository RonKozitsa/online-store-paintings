import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {StoreItemInterface} from '../store-item/store-item.interface';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesGridComponent implements OnInit {

  @Input() gridItems: StoreItemInterface[] = [];
  @Input() gridStyle: object;

  constructor() {
  }

  ngOnInit() {
  }

}
