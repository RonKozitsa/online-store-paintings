import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page.component';
import {homePageRoutes} from './home-page.routing';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homePageRoutes)
  ]
})
export class HomePageModule {
}
