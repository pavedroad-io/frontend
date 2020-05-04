import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { NewDocumentWizardComponent } from './components/new-document-wizard/new-document-wizard.component';
import { KafkaConfigComponent } from './components/kafka-config/kafka-config.component';
import { CockroachConfigComponent } from './components/cockroach-config/cockroach-config.component';
import { SoncarCloudConfigComponent } from './components/soncar-cloud-config/soncar-cloud-config.component';
import { FossaConfigComponent } from './components/fossa-config/fossa-config.component';
import { ScaConfigComponent } from './components/sca-config/sca-config.component';

// 3rd Party modules
import { deserialize, JsonProperty } from 'json-typescript-mapper';



@NgModule({
	declarations: [
		NewServiceWizardComponent,
		ServiceFilterPipe,
		VariableTypesComponent,
		TableComponent,
		ColumnsComponent,
		NewDocumentWizardComponent,
		KafkaConfigComponent,
		CockroachConfigComponent,
		SoncarCloudConfigComponent,
		FossaConfigComponent,
		ScaConfigComponent
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
		MatDialogModule,
		DragDropModule,
		MatListModule,
		ScrollingModule
	],
	entryComponents: [
		ScrollingModule,
		FossaConfigComponent,
		KafkaConfigComponent,
		SoncarCloudConfigComponent,
		CockroachConfigComponent
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
