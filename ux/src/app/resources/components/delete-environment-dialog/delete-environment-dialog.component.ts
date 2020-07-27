import { Component, OnInit, Input, Inject } from '@angular/core';
import { Ports } from '../../structures/ports';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-environment-dialog',
  templateUrl: './delete-environment-dialog.component.html',
  styleUrls: ['./delete-environment-dialog.component.css']
})
export class DeleteEnvironmentDialogComponent implements OnInit {
	title: string;
	items: any;

  constructor(private dialogRef: MatDialogRef<DeleteEnvironmentDialogComponent>,
		@Inject(MAT_DIALOG_DATA) data) {
		this.title = data.title;
		this.items = data.items;
	
	}

  ngOnInit(): void {
  }

	public cancel() {
		this.dialogRef.close(false);
	}

	public confirm() {
		this.dialogRef.close(true);
	}

}
