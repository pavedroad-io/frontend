import { Component, OnInit } from '@angular/core';
import { Icolumn } from '../columns/columns.component';

export interface Itable {
	name: string;
	tableType: string;
	parentTables: string;
	columns: Array<Icolumn>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
	pTable: Itable;

	constructor() {
		this.pTable = <Itable>{};	
	}

  ngOnInit(): void {
  }

	load() {
	}

	toJson() {
	}

	// initNew: creates the parent table adding
	// the created and updated columns
	initNew(tableName: string) {
		this.pTable.name = tableName;
		this.pTable.parentTables = "";
		this.pTable.tableType = "jsonb";

		let created = <Icolumn>{
			type: "time",
			name: "created",
			modifiers: "",
			constraints: "",
			mappedName: "created",
			editable: false
		};

		let updated = <Icolumn>{
			type: "time",
			name: "updated",
			modifiers: "",
			constraints: "",
			mappedName: "updated",
			editable: false
		};

		// TODO: add check function to make sure it is a valid type
		// Look it up first and maybe set boundary limits

		this.pTable.columns.push(created,updated);
	}

}
