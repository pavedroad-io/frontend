import { Component, OnInit, Input } from '@angular/core';
import { IvariableTypes } from '../../services/variable-types.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

export interface Icolumn {
	name: string;
	coltype: string;
	modifiers: string;
	constraints: string;
	mappedName: string;
	editable: boolean;
}

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})

export class ColumnsComponent implements OnInit {
	@Input() col: Icolumn;
  	@Input() selectedModifier: string;
  	@Input() selectedConstraint: string;

	modifiers: any[] = [
	  { checked: false,
		name: "ignore",
		displayName: "Ignore",
		icon: ""
	  },
	  { checked: false,
		name: "omitempty",
		displayName: "Omit if empty",
		icon: ""
	  }
	];

	constraints: any[] = [
	  { name: "required",
		checked: false,
		displayName: "Required",
		for: "any",
		icon: ""
	  },
	  { name: "tel",
		checked: false,
		displayName: "Telephone #",
		for: "string",
		icon: ""
	  },
	  { name: "url",
		checked: false,
		displayName: "URL",
		for: "string",
		icon: ""
	  },
	  { name: "password",
		checked: false,
		displayName: "password",
		for: "string",
		icon: ""
	  }
	];


	constructor() {
		this.col = <Icolumn>{}
	}

  ngOnInit(): void {
  }

	get(): Icolumn {
		return this.col;
	}

	set(newCol: Icolumn): boolean {
		this.col = newCol;
		return true;
	}

    filterConstraints(): any[] {
	  let reply: any[];
	  for (let c in this.constraints) {
		console.log(c);
		/*
		switch(c.type) {
		  case "any": {
		  }
		}
		 */
			reply.push(c);
	  }

	  return reply;
	}

}
