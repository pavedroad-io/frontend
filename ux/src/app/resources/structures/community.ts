import { CommunityFiles } from './community-files';

export class Community {

	CommunityFiles: Array<CommunityFiles>;
	desciption: string;

	construtor() {
		this.desciption = "";
		this.CommunityFiles = Array(1);
	}
}
