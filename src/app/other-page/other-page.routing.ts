import {Routes} from '@angular/router';

import {OtherPageComponent} from './other-page.component';

export const otherPageRoutes: Routes = [
  {path: '', component: OtherPageComponent, pathMatch: 'full'}
];
