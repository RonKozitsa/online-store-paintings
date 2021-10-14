import {Routes} from '@angular/router';

import {ChildrenPageComponent} from './children-page.component';

export const childrenPageRoutes: Routes = [
  {path: '', component: ChildrenPageComponent, pathMatch: 'full'}
];
