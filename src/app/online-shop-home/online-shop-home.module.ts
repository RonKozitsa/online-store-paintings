import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OnlineShopHomeRoutes } from './online-shop-home.routing';

@NgModule({
  imports: [RouterModule.forChild(OnlineShopHomeRoutes), CommonModule]
})
export class OnlineShopHomeModule {}
