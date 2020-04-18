import { deserialize, JsonProperty } from 'json-typescript-mapper';
import { Columns } from './columns';

export class Table {
	@JsonProperty('table-name')
	tableName: string;

	@JsonProperty('table-type')
	tableType: string;

	@JsonProperty('parent-table')
	parentTable: string;

	columns: Array <Columns>;
}
