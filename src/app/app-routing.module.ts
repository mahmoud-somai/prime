import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationalUnitComponent } from './operational-unit/operational-unit.component';

const routes: Routes = [

  {
    path:'/unity',
    component:OperationalUnitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {



 }
