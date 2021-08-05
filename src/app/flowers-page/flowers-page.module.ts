import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FlowersPageComponent } from './flowers-page.component';
import {flowersPageRoutes} from './flowers-page.routing';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [FlowersPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(flowersPageRoutes),
    SharedModule
  ]
})
export class FlowersPageModule { }
