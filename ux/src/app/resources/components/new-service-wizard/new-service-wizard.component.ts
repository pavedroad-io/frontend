import { Component, OnInit } from '@angular/core';
import { ServiceListService, IserviceResponse } from  '../../services/service-list.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-new-service-wizard',
  templateUrl: './new-service-wizard.component.html',
  styleUrls: ['./new-service-wizard.component.css']
})
export class NewServiceWizardComponent implements OnInit {
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

	// TODO: move to services
	selectedServiceType: string;
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

	// TODO: move to service

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
