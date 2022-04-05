import {Routes} from '@angular/router';

import {AnimalsPageComponent} from './animals-page.component';

export const otherPageRoutes: Routes = [
  {path: '', component: AnimalsPageComponent, pathMatch: 'full'}
];
