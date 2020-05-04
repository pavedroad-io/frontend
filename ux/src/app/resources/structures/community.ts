import { deserialize, JsonProperty } from 'json-typescript-mapper';
import { CommunityFiles } from './community-files';

export class Community {

	//@JsonProperty('community-files')
	CommunityFiles: Array<CommunityFiles>;
	desciption: string;

	construtor() {
		this.desciption = "";
		this.CommunityFiles = Array(1);
	}
}
