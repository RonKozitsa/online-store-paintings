import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';
import {animalPaintings} from './animals-page.consts';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsPageComponent implements OnInit {

  gridItems: StoreItemInterface[] = animalPaintings;

  constructor() {
  }

  ngOnInit() {
  }

}
