import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TechnologiesRoutingModule } from './technologies-routing.module';

@NgModule({
  declarations: [TechnologiesRoutingModule.components],
  imports: [CommonModule, TechnologiesRoutingModule],
})
export class TechnologiesModule {}
