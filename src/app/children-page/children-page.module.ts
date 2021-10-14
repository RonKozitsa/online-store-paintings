import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ChildrenPageComponent} from './children-page.component';
import {childrenPageRoutes} from './children-page.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ChildrenPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childrenPageRoutes),
    SharedModule,
  ]
})
export class ChildrenPageModule {
}
