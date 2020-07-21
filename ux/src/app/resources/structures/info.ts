
export class Info {
	  apiVersion:    string;
    id:            string;
    name:          string;
    organization:  string;
	//@JsonProperty('release-status')
    releaseStatus: string;
    version:       string;

	constructor(){
		this.version = "1.0.0alpha";
		this.id = "name of template";
		this.name = "name of service";
		this.organization = "Your company";
		this.releaseStatus = "alpha";
		this.version = "v1.0.0alphta";
	}
}
