import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ContactPageComponent } from './contact-page.component';
import { contactPageRoutes } from './contact-page.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({ declarations: [ContactPageComponent], imports: [CommonModule, RouterModule.forChild(contactPageRoutes), ReactiveFormsModule, SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ContactPageModule {}
