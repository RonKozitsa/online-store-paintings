import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BabyPageComponent} from './baby-page.component';
import {babyPageRoutes} from './baby-page.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [BabyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(babyPageRoutes),
    SharedModule,
  ]
})
export class BabyPageModule {
}
