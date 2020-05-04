import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Columns {
	name: string;
	modifiers: string;
	//@JsonProperty('mapped-name')
	mappedName: string;
	constraints: string;
	type: string;
}
