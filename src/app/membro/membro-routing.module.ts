import { MembronewComponent } from './membronew/membronew.component';
import { MembroupdateComponent } from './membroupdate/membroupdate.component';
import { MembrolistComponent } from './membrolist/membrolist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MembrolistComponent},
  {path: 'membro/:id', component: MembroupdateComponent},
  {path: 'novo', component: MembronewComponent},
  {path: 'update/:id', component: MembroupdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembroRoutingModule { }
