import { Go } from './go';
import { Dependencies } from './dependencies';
import { Maintainer } from './maintainer';
import { ProjectFiles } from './project-files';
import { Integrations } from './integrations';
import { KubeConfig } from './kube-config';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Project {
	//@JsonProperty('top_level_domain')
	  tld:           string;
    description:   string;
    dependencies:  Dependencies;
    license:       string;
	//@JsonProperty('scheduler_name')
    schedulerName: string;
    maintainer:    Maintainer;
	//@JsonProperty('project-files')
		projectFiles:  Array<ProjectFiles>;
		integrations:  Integrations;
    kubernetes:    KubeConfig;
		go: Go;

	constructor() {
		this.tld = "api.pavedroad.io";
		this.description = "";
		this.license = "Apache2";
		this.schedulerName = "httpScheduler";
		this.maintainer = new Maintainer();
		this.projectFiles = new Array(1);
		this.integrations = new Integrations(['fossa','sonarcloud']);
		this.kubernetes = new KubeConfig();
		this.dependencies = new Dependencies();
		this.go = new Go();
	}
}
