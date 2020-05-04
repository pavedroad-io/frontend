import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Dependencies } from '../../structures/dependencies'; 
import { Ports } from '../../structures/ports'; 
import { Topic } from '../../structures/topic'; 
import { SelectOptions } from '../../structures/select-options'; 
import { DefinitionFile } from '../../structures/definition-file'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { deserialize, JsonProperty } from 'json-typescript-mapper';
import { MatListModule } from '@angular/material/list';

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
		console.log(option);
	}

	// external -> Internal mapping
	prPorts: Array<Ports>;
	prSelectedPorts: number[] = [];
	portSelectionChange(option) {
		console.log(option);
	}

	prVolumns: Array<string>;
	prSelectedVolmns: string[] = [""];
	prVolumnsSelectionChange(option) {
		console.log(option);
	}

	constructor(private fb: FormBuilder,
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
		console.log(this.form.value);
		console.log(this.def);
	}

	addEnvironmnet(type: string) {
		console.log("add ", type);
	}

	editEnvironmnet(type: string) {
		console.log("edit ", type);
	}

	deleteEnvironmnet(type: string) {
		console.log("delete ", type);
	}

}
