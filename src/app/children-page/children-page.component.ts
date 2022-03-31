import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';

@Component({
  selector: 'app-children-page',
  templateUrl: './children-page.component.html',
  styleUrls: ['./children-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenPageComponent implements OnInit {

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
      name: 'Item name 2'
    },
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
      name: 'Item name 2'
    },
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
      name: 'Item name 2'
    },
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
      name: 'Item name 2'
    },
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
      name: 'Item name 2'
    },
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
      name: 'Item name 2'
    },
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
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
      name: 'Item name 2'
    },
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
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
      name: 'Item name 2'
    },
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
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
      name: 'Item name 2'
    },
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
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
      name: 'Item name 2'
    },
    {
      description: 'desc',
      id: 1,
      price: 100,
      name: 'Item name'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
