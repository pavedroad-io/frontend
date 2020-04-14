import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceListService, IserviceResponse } from  '../../services/service-list.service';
import { VariableTypesComponent } from '../variable-types/variable-types.component';
import { TableComponent, Itable } from '../table/table.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CdkDragStart, CdkDragMove, CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-new-service-wizard',
  templateUrl: './new-service-wizard.component.html',
  styleUrls: ['./new-service-wizard.component.css']
})
export class NewServiceWizardComponent implements OnInit {
	@ViewChild(MatListModule, { read: ElementRef }) child: ElementRef;

  isLinear = false;

  serviceFG: FormGroup;
  orgFG: FormGroup;
  dependenciesFG: FormGroup;
  integrationsFG: FormGroup;
  documentFG: FormGroup;

	OSS = true;
	createNewRepo = true;
	fossa = true;
	sonarcloud = true;

	tld: string;
	scheduler?: string;

	services: IserviceResponse[];

	selectedServiceType: string;

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

	// valid-data-types
	//
	types = [
    'string',
    'number',
    'integer',
		'boolean',
		'time',
		'[]array',
		'{}object',
		'time',
		'uuid'
  ]	
	
 _currentIndex;
 _currentField;

	fields: string[] = [];

  itemDropped(event: CdkDragDrop<any[]>) {
		console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    } else {
      this.addField(event.item.data.key, event.currentIndex);
    }
  }

  addField(fieldType: string, index: number) {
    this.fields.splice(index, 0, fieldType)
  }

	constructor( private service: ServiceListService,
							 private _formBuilder: FormBuilder) { 
	
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

	trackByIndex(index, item) {
    return index; // or item.id
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

}
