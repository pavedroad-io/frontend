import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { VariableTypesService, IvariableTypes, IvariableTypesConfig } from '../../services/variable-types.service'; 


@Component({
  selector: 'app-variable-types',
  templateUrl: './variable-types.component.html',
  styleUrls: ['./variable-types.component.css']
})
export class VariableTypesComponent implements OnInit {
	config: IvariableTypesConfig;
	types: IvariableTypes[];

	constructor( private typesService: VariableTypesService) {
	}

  ngOnInit(): void {
		this.types = this.typesService.getTypes();
  }

}
