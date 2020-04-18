import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Info {
	@JsonProperty('api-version')
	  apiVersion:    string;
    id:            string;
    name:          string;
    organization:  string;
	@JsonProperty('release-status')
    releaseStatus: string;
    version:       string;
}
