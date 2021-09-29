import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StickyHeaderComponent} from './components/sticky-header/sticky-header.component';
import {ImagesGridComponent} from './components/images-grid/images-grid.component';
import {StoreItemComponent} from './components/store-item/store-item.component';
import {StoreItemDescriptionComponent} from './components/store-item-description/store-item-description.component';
import {ItemPricingComponent} from './components/item-pricing/item-pricing.component';
import {StoreItemImageComponent} from './components/store-item-image/store-item-image.component';
import {PageFooterComponent} from './components/page-footer/page-footer.component';
import {ShopCategoryOptionComponent} from './components/shop-category-option/shop-category-option.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {PictureWithDescriptionComponent} from './components/picture-with-description/picture-with-description.component';
import {AppCarouselComponent} from './components/app-carousel/app-carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

const components = [
    StickyHeaderComponent,
    ImagesGridComponent,
    StoreItemComponent,
    StoreItemDescriptionComponent,
    ItemPricingComponent,
    StoreItemImageComponent,
    PageFooterComponent,
    ShopCategoryOptionComponent,
    NavigationComponent,
    PictureWithDescriptionComponent,
    AppCarouselComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule,
    ],
    exports: components
})
export class SharedModule {
}
