import {Routes} from '@angular/router';

import {OnlineShopHomeComponent} from './online-shop-home.component';

export const OnlineShopHomeRoutes: Routes = [
    {
        path: '',
        component: OnlineShopHomeComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'flowers'},
            {path: 'flowers', loadChildren: () => import('../flowers-page/flowers-page.module').then(m => m.FlowersPageModule)},
            {path: 'children', loadChildren: () => import('../children-page/children-page.module').then(m => m.ChildrenPageModule)},
            {path: 'other', loadChildren: () => import('../other-page/other-page.module').then(m => m.OtherPageModule)}
        ],
    }
];
