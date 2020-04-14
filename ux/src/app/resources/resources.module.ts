import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { DragDropModule} from '@angular/cdk/drag-drop';

// Services
import { ServiceListService } from './services/service-list.service';
import { VariableTypesService } from './services/variable-types.service';

// Pipes
import { ServiceFilterPipe } from './components/new-service-wizard/filter-services.pipe';

// Components
import { ResourcesRoutingModule } from './resources-routing.module';
import { NewServiceWizardComponent } from './components/new-service-wizard/new-service-wizard.component';
import { VariableTypesComponent } from './components/variable-types/variable-types.component';
import { TableComponent } from './components/table/table.component';
import { ColumnsComponent } from './components/columns/columns.component';


@NgModule({
	declarations: [
		NewServiceWizardComponent,
		ServiceFilterPipe,
		VariableTypesComponent,
		TableComponent,
		ColumnsComponent
	],
  imports: [
		CommonModule,
		MaterialModule,
		LayoutModule,
		ResourcesRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialModule,
		DragDropModule,
		MatListModule
	],
	exports: [
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [
		ServiceListService,
		VariableTypesService
	]
})
export class ResourcesModule { }
