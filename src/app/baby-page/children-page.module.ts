import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ChildrenPageComponent} from './children-page.component';
import {babyPageRoutes} from './children-page.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ChildrenPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(babyPageRoutes),
    SharedModule,
  ]
})
export class ChildrenPageModule {
}
