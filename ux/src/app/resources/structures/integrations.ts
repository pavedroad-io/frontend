import { Badges } from './badges';
import { sonarCloudConfig } from './sonar-cloud-config';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Integrations {
	badges: Array<Badges>;
	name: string;
	key: string;
	@JsonProperty('sonar-cloud-config')
	sonarCloudConfig: sonarCloudConfig;
}
