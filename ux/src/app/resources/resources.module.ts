import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceListService } from './services/service-list.service';

import { ResourcesRoutingModule } from './resources-routing.module';
import { NewServiceWizardComponent } from './components/new-service-wizard/new-service-wizard.component';
import { ServiceFilterPipe } from './components/new-service-wizard/filter-services.pipe';


@NgModule({
	declarations: [
		NewServiceWizardComponent,
		ServiceFilterPipe
	],
  imports: [
		CommonModule,
		MaterialModule,
		LayoutModule,
		ResourcesRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [
		ServiceListService
	]
})
export class ResourcesModule { }
