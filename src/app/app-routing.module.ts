import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)},
    {path: 'shop', loadChildren: () => import('./online-shop-home/online-shop-home.module').then(m => m.OnlineShopHomeModule)},
    {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)},
    {path: 'contact', loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
