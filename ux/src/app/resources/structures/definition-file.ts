import { Table } from './table';
import { Community } from './community';
import { Info } from './info';
import { Project } from './project';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class DefinitionFile {
	@JsonProperty('tables')
		tableList: Array<Table>;
		community: Community;
		info: Info;
		Project: Project;
}
