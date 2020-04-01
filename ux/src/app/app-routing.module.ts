import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { NavComponent } from './nav/nav.component';


const routes: Routes = []
//const routes: Routes = [
//	{ path: '/home', component: NavComponent },
//	{ path: '', redirectTo: '/home', pathMatch: 'full'}
//]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
