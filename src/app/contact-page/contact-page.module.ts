import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ContactPageComponent } from './contact-page.component';
import {contactPageRoutes} from './contact-page.routing';



@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactPageRoutes)
  ]
})
export class ContactPageModule { }
