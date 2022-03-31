import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import {NavigationHeaderComponent} from './components/navigation-header/navigation-header.component';
import {ImagesGridComponent} from './components/images-grid/images-grid.component';
import {StoreItemComponent} from './components/store-item/store-item.component';
import {PageFooterComponent} from './components/page-footer/page-footer.component';
import {ShopCategoryOptionComponent} from './components/shop-category-option/shop-category-option.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AppCarouselComponent} from './components/app-carousel/app-carousel.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {StoreItemImageComponent} from './components/store-item-image/store-item-image.component';
import {ItemExpandedViewComponent} from './components/item-expanded-view/item-expanded-view.component';
import {AppButtonComponent} from './components/online-store-button/app-button.component';

const components = [
    NavigationHeaderComponent,
    ImagesGridComponent,
    StoreItemComponent,
    PageFooterComponent,
    ShopCategoryOptionComponent,
    NavigationComponent,
    AppCarouselComponent,
    SideMenuComponent,
    StoreItemImageComponent,
    ItemExpandedViewComponent,
    AppButtonComponent
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
