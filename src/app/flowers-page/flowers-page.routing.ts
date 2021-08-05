import {Routes} from '@angular/router';

import {FlowersPageComponent} from './flowers-page.component';

export const flowersPageRoutes: Routes = [
  {path: '', component: FlowersPageComponent, pathMatch: 'full'}
];
