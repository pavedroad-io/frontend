import { Table } from './table';
import { Community } from './community';
import { Info } from './info';
import { Project } from './project';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class DefinitionFile {
	//@JsonProperty('tables')
		tableList: Array<Table>;
		community: Community;
		info: Info;
		project: Project;

	constructor(){
		this.tableList = new Array(1);
		let nt: Table = new Table();
		nt.parentTable = "";
		nt.tableType = "jsonb";
		nt.tableName = "";
		nt.columns = new Array(3);
		this.tableList.push(nt);

		this.community = new (Community);
		this.info = new (Info);
		this.project = new (Project);
		console.log(this.info);
	}
}
