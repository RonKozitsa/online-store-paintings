import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainPagesNavigationNamesEnums } from './shared/interfaces/pages-navigation-names.interface';
import {ContactPageComponent} from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: MainPagesNavigationNamesEnums.home,
    loadComponent: () => import('./home-page/home-page.component').then((c) => c.HomePageComponent)
  },
  {
    path: MainPagesNavigationNamesEnums.collection,
    loadChildren: () => import('./online-shop-home/online-shop-home.module').then((m) => m.OnlineShopHomeModule)
  },
  {
    path: MainPagesNavigationNamesEnums.about,
    loadComponent: () => import('./about-page/about-page.component').then(c => c.AboutPageComponent)
  },
  {
    path: MainPagesNavigationNamesEnums.contact,
    loadComponent: () => import('./contact-page/contact-page.component').then((c) => c.ContactPageComponent)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
