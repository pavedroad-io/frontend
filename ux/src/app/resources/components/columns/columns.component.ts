import { Component, OnInit } from '@angular/core';
import { IvariableTypes } from '../../services/variable-types.service';

export interface Icolumn {
	name: string;
	type: string;
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
	col: Icolumn;

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

}
