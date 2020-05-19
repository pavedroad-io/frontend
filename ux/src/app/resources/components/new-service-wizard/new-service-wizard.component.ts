// used to import js-yaml
declare var require: any;

import { Component, OnInit, ElementRef, ViewChild, Output, Input } from '@angular/core';
import { ServiceListService, IserviceResponse } from  '../../services/service-list.service';
import { KafkaConfigComponent } from '../kafka-config/kafka-config.component';
import { VariableTypesComponent } from '../variable-types/variable-types.component';
import { TableComponent, Itable } from '../table/table.component';
import { DefinitionFile } from '../../structures/definition-file'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CdkDragStart, CdkDragMove, CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-new-service-wizard',
  templateUrl: './new-service-wizard.component.html',
  styleUrls: ['./new-service-wizard.component.css']
})
export class NewServiceWizardComponent implements OnInit {
	@ViewChild(MatListModule, { read: ElementRef }) child: ElementRef;

	def: DefinitionFile = new DefinitionFile();

  serviceFG: FormGroup;
  orgFG: FormGroup;
  dependenciesFG: FormGroup;
  integrationsFG: FormGroup;
  documentFG: FormGroup;

	OSS = true;
	createNewRepo = true;
	fossa = true;
	sonarcloud = true;
	serviceName: string = "test";

	tld: string;
	scheduler?: string;

	services: IserviceResponse[];

	selectedServiceType: string;
	//
	// TODO: move to service
	serviceTypes: any[] = [
		{ value: "ms", displayName: "Microserivces", icon: "" },
		{ value: "faas", displayName: "Function", icon: "" },
		{ value: "crd", displayName: "CRD", icon: "" }
	];

	selectedOrg: string;
	orgs: any[] = [
		{ value: "pr", type: "org", displayName: "pavedroad-io", icon: "" },
		{ value: "ad", type: "org", displayName: "acme-demo", icon: "" },
		{ value: "js", type: "user", displayName: "jscharber", icon: "" },
	]

	constructor( private service: ServiceListService,
						 		private _formBuilder: FormBuilder,
								private dialog: MatDialog	
	) { 
	
	}

	serviceNameChanged(event) {
		console.log(event);
	}

	getServicesByType(type: string): any[] {
		let data: any[];

		for (let item of this.services) {
			if (item.type === type) {
				data.push(item);
			}
		}

		return data;
	}

	forwardDropped(event) {
		console.log("test", event);
	}

	openKafkaConfig() {
		const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(KafkaConfigComponent, dialogConfig);
	}

	ngOnInit(): void {
		this.services = this.service.getServices()
		this.selectedServiceType = this.serviceTypes[0].value;

	  this.serviceFG = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.orgFG = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.dependenciesFG = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.integrationsFG = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });

    this.documentFG = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

		/*
		 when it is real http
		.subscribe(
    response => {
    	this.services = response.body;
    },
    error => {
    	console.log(error);
    });
		 */


  }

	yamldef(): string {

		var YAML = require('js-yaml');
		var ymlText;

		ymlText = YAML.safeDump(this.def, {
			'skipInvalid': true,
			'lineWidth': 400,
			'sortKeys': true
		});
		return ymlText
	}

	saveDef() {
		var blob = new Blob([this.yamldef()], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "test.yaml");
	}
}
