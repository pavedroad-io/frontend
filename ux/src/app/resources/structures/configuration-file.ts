import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class ConfigurationFile {
	@JsonProperty('artifacts-dir')
	artifacsDir: string;
	name: string;
	path: string;
	src: string;
}
