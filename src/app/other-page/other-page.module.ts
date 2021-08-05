import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { OtherPageComponent } from './other-page.component';
import {otherPageRoutes} from './other-page.routing';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [OtherPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(otherPageRoutes),
    SharedModule
  ]
})
export class OtherPageModule { }
