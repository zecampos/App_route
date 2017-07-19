import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelulaRoutingModule } from './celula-routing.module';
import { CelulalistComponent } from './celulalist/celulalist.component';

@NgModule({
  imports: [
    CommonModule,
    CelulaRoutingModule
  ],
  declarations: [CelulalistComponent]
})
export class CelulaModule { }
