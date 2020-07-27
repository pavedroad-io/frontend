import { Columns } from './columns';

export class Table {
	tableName: string;

	tableType: string;

	parentTable: string;

	columns: Array <Columns>;
}
