import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewServiceWizardComponent } from './components/new-service-wizard/new-service-wizard.component';

const routes: Routes = [
	{ path: 'wizard', component: NewServiceWizardComponent },
	{ path: '', redirectTo: '/wizard', pathMatch: 'prefix'}
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
