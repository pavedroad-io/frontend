declare var require: any;
		
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Dependencies } from '../../structures/dependencies'; 
import { Ports } from '../../structures/ports'; 
import { Topic } from '../../structures/topic'; 
import { SelectOptions } from '../../structures/select-options'; 
import { DefinitionFile } from '../../structures/definition-file'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { PortCRUDComponent } from '../port-crud/port-crud.component'; 
import { NoItemsSelectedComponent } from '../no-items-selected/no-items-selected.component'; 
import { DeleteEnvironmentDialogComponent } from '../delete-environment-dialog/delete-environment-dialog.component'; 

@Component({
  selector: 'app-kafka-config',
  templateUrl: './kafka-config.component.html',
  styleUrls: ['./kafka-config.component.css']
})

export class KafkaConfigComponent implements OnInit {
	description: string = "Kafka Configuration";
	form: FormGroup;
	def: DefinitionFile = new DefinitionFile(); 

	// Selection options
	selectedPrLogConfigTypeOption = "env";
	prLogConfigTypeOptions: Array<SelectOptions> = [
		{
			selected: true,
			name: "env",
			displayName: "Environment",
			icon: ""
		},
		{
			selected: false,
			name: "file",
			displayName: "File",
			icon: ""
		},
		{
			selected: false,
			name: "both",
			displayName: "Both",
			icon: ""
		}
	];

	prLogFileFormatOptions: Array<SelectOptions> = [
		{
			selected: true,
			name: "text",
			displayName: "Text",
			icon: ""
		},
		{
			selected: false,
			name: "json",
			displayName: "JSON",
			icon: ""
		},
		{
			selected: false,
			name: "cloudevents",
			displayName: "Cloud Events 1.0",
			icon: ""
		}
	];

	prLogAutoInit: boolean = true;

	prLogConfigType: string = this.prLogConfigTypeOptions[0].name;

	prLogFileType: string = this.prLogFileFormatOptions[0].name;

	prLogEnableKafka: boolean = true;

	// TODO: get users from ms name
	// TODO: Mark needs to fix it in the template
	prLogFileLocation: string = 'logs/users.log';

	prKafkaBrokers: string = 'kakfa:9092';

	// Single value
	prExposePorts: Array<string>;
	prSelectedExposePorts: string[] = [""];
	portExposedSelectionChange(option) {
		//console.log(option);
	}

	// external -> Internal mapping
	prPorts: Array<Ports>;
	prSelectedPorts: number[] = [];
	portSelectionChange(option) {
		//console.log(option);
	}

	prVolumns: Array<string>;
	prSelectedVolmns: string[] = [""];
	prVolumnsSelectionChange(option) {
		//console.log(option);
	}

	constructor(private fb: FormBuilder,
							private addDialog: MatDialog,
							private deleteDialog: MatDialog,
							private noSelectionDialog: MatDialog,
							private dialogRef: MatDialogRef<KafkaConfigComponent>,
							@Inject(MAT_DIALOG_DATA) data) {
		this.prExposePorts = new Array(0);
		this.prPorts = new Array(0);
		this.prVolumns = new Array(0);

		this.prPorts.push(
			{id: 0, external: "26257", internal: "26257"},
			{id: 1, external: "6060", internal: "6060"},
			{id: 2, external: "8080", internal: "8080"}
		);
		this.prExposePorts.push("8080", "26247");
		this.prVolumns.push("- ../volumes/data/db-1:/cockroach/cockroach-data");
	
	}

  ngOnInit(): void {
		this.form = this.fb.group({
			description: [this.description, []],
			autoinit: [this.prLogAutoInit, []]
		});
  }

	close() {
		this.dialogRef.close();
	}

	save() {
		this.dialogRef.close(this.form.value);
		//console.log(this.form.value);
		this.yamldef();
	}

	addEnvironmnet(type: string) {
		let title: string = "Add " + type;
		const addDialogConfig = new MatDialogConfig;
		addDialogConfig.disableClose = true;
		addDialogConfig.autoFocus = true;

		if (type === "port") {
			let newPort: Ports = {id: null, external: "0", internal: "0"};
			addDialogConfig.data = {
				action: type,
				title: title,
				port: newPort
			};

			const addDialogRef = this.addDialog.open(PortCRUDComponent, addDialogConfig);

			addDialogRef.afterClosed().subscribe(
				data => {
					data.id = this.prPorts.length;
					this.prPorts.push(data);
				}
			);
			}
	}

	editEnvironmnet(type: string) {

		if (type === "port") {
			let title: string = "Edit " + type;
			const editDialogConfig = new MatDialogConfig;
			editDialogConfig.disableClose = true;
			editDialogConfig.autoFocus = true;

			this.checkSelection(type);

			// For each selected port, open the edit dialog
			for ( let index of this.prSelectedPorts) {
				console.log(this.prPorts[index]);
				editDialogConfig.data = {
					action: type,
					title: title,
					port: this.prPorts[index]
				};
				const editDialogRef = this.addDialog.open(PortCRUDComponent, editDialogConfig);
				editDialogRef.afterClosed().subscribe(
					data => {
						this.prPorts[index].external = data.external;
						this.prPorts[index].internal = data.internal;
					}
				);
			}
			
		}
	}

	deleteEnvironmnet(type: string) {
		this.checkSelection(type);
		if (type === "port") {
			let title: string = "Delete " + type + "s";
			let deleteList: Array<string> = [];
			const deleteDialogConfig = new MatDialogConfig;
			deleteDialogConfig.disableClose = true;
			deleteDialogConfig.autoFocus = true;

			for ( let index of this.prSelectedPorts) {
				let displayString = 
					this.prPorts[index].external + " --> " +
					this.prPorts[index].internal;
				deleteList.push(displayString);
			}

			deleteDialogConfig.data = {
				action: type,
				title: title,
				items: deleteList
			};

			const deleteDialogRef = this.deleteDialog.open(DeleteEnvironmentDialogComponent, deleteDialogConfig);

			deleteDialogRef.afterClosed().subscribe(
					data => {
						if ( data ) {
							for ( let index of this.prSelectedPorts) {
								this.prPorts.splice(index,1);
							}
						}
					}
			);
		}
	}

	checkSelection(selectionType: string) {
			// Make sure they  have select 1 or more ports
			if (this.prSelectedPorts.length === 0) {
				let noSelectionDialogConfig = new MatDialogConfig;
				noSelectionDialogConfig.disableClose = true;
				noSelectionDialogConfig.data = {
				title: selectionType + " selection error",
				message: "No " + selectionType + " are selected?"
				};
				this.noSelectionDialog.open(NoItemsSelectedComponent,
					noSelectionDialogConfig);
			}
	}

	yamldef(): string {

		var YAML = require('js-yaml');
		var ymlText;

		ymlText = YAML.safeDump(this.def, {
			'skipInvalid': true,
			'lineWidth': 400,
			'sortKeys': true
		});
		console.log(ymlText);
		return ymlText

	}
}
