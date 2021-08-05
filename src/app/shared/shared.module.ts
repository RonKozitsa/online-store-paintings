import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {ImagesGridComponent} from './components/images-grid/images-grid.component';
import {StoreItemComponent} from './components/store-item/store-item.component';
import {StoreItemDescriptionComponent} from './components/store-item-description/store-item-description.component';
import {ItemPricingComponent} from './components/item-pricing/item-pricing.component';
import {StoreItemImageComponent} from './components/store-item-image/store-item-image.component';
import {PageFooterComponent} from './components/page-footer/page-footer.component';

const components = [
  HeaderComponent,
  ImagesGridComponent,
  StoreItemComponent,
  StoreItemDescriptionComponent,
  ItemPricingComponent,
  StoreItemImageComponent,
  PageFooterComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: components
})
export class SharedModule { }
