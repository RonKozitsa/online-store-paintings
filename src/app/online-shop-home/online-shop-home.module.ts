import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {OnlineShopHomeComponent} from './online-shop-home.component';
import {SharedModule} from '../shared/shared.module';
import {OnlineShopHomeRoutes} from './online-shop-home.routing';

@NgModule({
    declarations: [OnlineShopHomeComponent],
    imports: [
        RouterModule.forChild(OnlineShopHomeRoutes),
        SharedModule,
        CommonModule
    ]
})
export class OnlineShopHomeModule {
}
