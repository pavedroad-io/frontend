import { Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
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
	@Input() serviceName;
	@Output() forward = new EventEmitter<any>();
	/*
	@Output('forward')
		forward: EventEmitter<CdkDragDrop<Icolumn, any>> =
  	new EventEmitter<CdkDragDrop<Icolumn, any>>();
	 */

	pTable: Itable;
	fields: string[] = [];

	constructor() {
		this.pTable = <Itable>{};	
		this.initNew(this.serviceName);
	}

  childDropped(event: CdkDragDrop<any[]>) {
		this.forward.emit(event);
		//console.log("childDroped", event);
    if (event.previousContainer === event.container) {
			//console.log("moveitem");
      moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    } else {
      this.addColumn(event.item.data, event.currentIndex);
    }
  }

  addField(fieldType: string, index: number) {
		//console.log(fieldType);
    this.fields.splice(index, 0, fieldType)
  }

	addColumn(data: any, index: number) {
		let items = [...this.pTable.columns];
		let newCol = <Icolumn>{
			coltype: data.key,
			name: "",
			modifiers: "",
			constraints: "",
			mappedName: "",
			editable: true
		};
		items.push(newCol);;
		//		this.pTable.columns.push(newCol);
		this.pTable.columns = items;	
		//console.log(this.pTable.columns);
	}

  ngOnInit(): void {
  }

	trackByIndex(index, item) {
    return index; // or item.id
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
		this.pTable.columns = [];

		let created = <Icolumn>{
			coltype: "time",
			name: "created",
			modifiers: "",
			constraints: "",
			mappedName: "created",
			editable: false
		};

		let updated = <Icolumn>{
			coltype: "time",
			name: "updated",
			modifiers: "",
			constraints: "",
			mappedName: "updated",
			editable: false
		};

		// TODO: add check function to make sure it is a valid type
		// Look it up first and maybe set boundary limits
		this.pTable.columns.push(created,updated);
		//console.log(this.pTable);
	}

}
