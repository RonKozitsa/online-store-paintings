import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { AboutPageComponent } from './about-page.component';
import {aboutPageRoutes} from './about-page.routing';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutPageRoutes)
  ]
})
export class AboutPageModule { }
