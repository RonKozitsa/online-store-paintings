import {Routes} from '@angular/router';

import {OnlineShopHomeComponent} from './online-shop-home.component';
import {childrenPaintings} from './online-shop-page/page-items/children-page.consts';
import {animalPaintings} from './online-shop-page/page-items/animals-page.consts';
import {OnlineShopPageComponent} from './online-shop-page/online-shop-page.component';

export const OnlineShopHomeRoutes: Routes = [
    {
        path: '',
        component: OnlineShopHomeComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'flowers'},
            {
                path: 'flowers',
                component: OnlineShopPageComponent,
                data: []
            },
            {
                path: 'children',
                component: OnlineShopPageComponent,
                data: childrenPaintings
            },
            {
                path: 'animals',
                component: OnlineShopPageComponent,
                data: animalPaintings
            }
        ],
    }
];
