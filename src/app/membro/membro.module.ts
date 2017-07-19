import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembroRoutingModule } from './membro-routing.module';
import { MembrolistComponent } from './membrolist/membrolist.component';
import { MembronewComponent } from './membronew/membronew.component';
import { MembroupdateComponent } from './membroupdate/membroupdate.component';

@NgModule({
  imports: [
    CommonModule,
    MembroRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [MembrolistComponent, MembronewComponent, MembroupdateComponent]
})
export class MembroModule { }
