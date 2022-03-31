import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherPageComponent implements OnInit {

  gridItems: StoreItemInterface[] = [
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
    {
      description: 'desc 2',
      id: 2,
      price: 200,
      name: 'Item name 2',
      imageName: 'sitting.jpeg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
