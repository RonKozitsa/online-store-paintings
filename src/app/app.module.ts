import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {provideHttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { WINDOW } from './shared/injection-tokens/window-token';
import { NavigationHeaderComponent } from './shared/components/navigation-header/navigation-header.component';
import { AppButtonComponent } from './shared/components/app-button/app-button.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule, LayoutModule, NavigationHeaderComponent, AppButtonComponent, ClickOutsideDirective],
  providers: [{ provide: WINDOW, useValue: window }, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}
