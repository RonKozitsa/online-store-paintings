import {Routes} from '@angular/router';

import {BabyPageComponent} from './baby-page.component';

export const babyPageRoutes: Routes = [
  {path: '', component: BabyPageComponent, pathMatch: 'full'}
];
