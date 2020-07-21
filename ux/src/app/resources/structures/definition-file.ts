import { Table } from './table';
import { Community } from './community';
import { Info } from './info';
import { Project } from './project';

export class DefinitionFile {
		tableList: Array<Table>;
		community: Community;
		info: Info;
		project: Project;

	constructor(){
		this.tableList = new Array(0);
		let nt: Table = new Table();
		nt.parentTable = "";
		nt.tableType = "jsonb";
		nt.tableName = "";
		nt.columns = new Array(0);
		this.tableList.push(nt);

		this.community = new (Community);
		this.info = new (Info);
		this.project = new (Project);
	}
}
