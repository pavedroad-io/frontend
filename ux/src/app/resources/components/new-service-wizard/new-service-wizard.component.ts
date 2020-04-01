import { Component, OnInit } from '@angular/core';
import { ServiceListService, IserviceResponse } from  '../../services/service-list.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-new-service-wizard',
  templateUrl: './new-service-wizard.component.html',
  styleUrls: ['./new-service-wizard.component.css']
})
export class NewServiceWizardComponent implements OnInit {
  isLinear = false;

  serviceFG: FormGroup;
  orgFG: FormGroup;

	selectedServiceType: string;
	//<mat-option *ngFor="let tpl of services"
	OSS = true;
	createNewRepo = true;

	services: IserviceResponse[];
	serviceTypes: any[] = [
		{ value: "ms", displayName: "Microserivces", icon: "" },
		{ value: "faas", displayName: "Function", icon: "" },
		{ value: "crd", displayName: "CRD", icon: "" }
	];

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
