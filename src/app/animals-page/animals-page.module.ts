import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { AnimalsPageComponent } from './animals-page.component';
import {otherPageRoutes} from './animals-page.routing';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AnimalsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(otherPageRoutes),
    SharedModule
  ]
})
export class AnimalsPageModule { }
