import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-new-document-wizard',
  templateUrl: './new-document-wizard.component.html',
  styleUrls: ['./new-document-wizard.component.css']
})
export class NewDocumentWizardComponent implements OnInit {
	@Input() serviceName: string;
	@Output() forward = new EventEmitter<any>();

  constructor() { }


  itemDropped(event: CdkDragDrop<any[]>) {
		console.log("itemDroped", event);
    if (event.previousContainer === event.container) {
			console.log("clean me up");
			// moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    } else {
			console.log("clean me up");
			//this.addField(event.item.data.key, event.currentIndex);
    }
  }

		/*
  addField(fieldType: string, index: number) {
    this.fields.splice(index, 0, fieldType)
  }
		 */

  ngOnInit(): void {
		console.log(this.serviceName);
  }

	forwardDropped(event) {
		console.log("test", event);
	}

	trackByIndex(index, item) {
    return index; // or item.id
  }

}
