/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';

import { environment } from './environments/environment';
import {AppComponent} from './app/app.component';
import {WINDOW} from './app/shared/injection-tokens/window-token';
import {appRoutes} from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [{ provide: WINDOW, useValue: window }, provideHttpClient(), provideRouter(appRoutes)]
});
