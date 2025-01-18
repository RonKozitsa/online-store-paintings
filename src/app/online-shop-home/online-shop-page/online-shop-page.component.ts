import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';
import { childrenPaintings } from '../page-items';
import { ActivatedRoute } from '@angular/router';
import { ImagesGridComponent } from '../../shared/components/images-grid/images-grid.component';

@Component({
  selector: 'app-online-shop-page',
  templateUrl: './online-shop-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ImagesGridComponent]
})
export class OnlineShopPageComponent implements OnInit {
  gridItems: StoreItemInterface[] = childrenPaintings;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.gridItems = Object.values(this.activatedRoute.snapshot.data) as StoreItemInterface[];
  }
}
