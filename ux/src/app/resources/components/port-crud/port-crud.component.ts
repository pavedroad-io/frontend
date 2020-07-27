import { Component, OnInit, Input, Inject } from '@angular/core';
import { Ports } from '../../structures/ports';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-port-crud',
  templateUrl: './port-crud.component.html',
  styleUrls: ['./port-crud.component.css']
})
export class PortCRUDComponent implements OnInit {
	port: Ports;
	description: string;

  constructor(private dialogRef: MatDialogRef<PortCRUDComponent>,
		@Inject(MAT_DIALOG_DATA) data) {
	
	  this.port = data.port;
	  this.description = data.title;
	}

  ngOnInit(): void {
  }

	cancel() {
		this.dialogRef.close(null);
	}

	save() {
		this.dialogRef.close(this.port);
	}

}
