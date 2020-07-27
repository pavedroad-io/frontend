import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-no-items-selected',
  templateUrl: './no-items-selected.component.html',
  styleUrls: ['./no-items-selected.component.css']
})
export class NoItemsSelectedComponent implements OnInit {
	title: string;
	message: string;

  constructor(private dialogRef: MatDialogRef<NoItemsSelectedComponent>,
		@Inject(MAT_DIALOG_DATA) data) {
		this.title = data.title;
    this.message = data.message;
	}

  ngOnInit(): void {
  }

	close() {
		this.dialogRef.close(null);
	}
}
