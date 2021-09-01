import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaListComponent} from './cinema-list/cinema-list.component';
import {CinemaCreateComponent} from './cinema-create/cinema-create.component';
import {CinemaEditComponent} from './cinema-edit/cinema-edit.component';


const routes: Routes = [
  {path: 'list', component: CinemaListComponent},
  {path: 'create', component: CinemaCreateComponent},
  {path: 'edit/:id', component: CinemaEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
