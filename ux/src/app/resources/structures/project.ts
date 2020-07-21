import { Go } from './go';
import { Dependencies } from './dependencies';
import { Maintainer } from './maintainer';
import { ProjectFiles } from './project-files';
import { Integrations } from './integrations';
import { KubeConfig } from './kube-config';

export class Project {
	  tld:           string;
    description:   string;
    dependencies:  Dependencies;
    license:       string;
    schedulerName: string;
    maintainer:    Maintainer;
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
		this.projectFiles = new Array(0);
		this.integrations = new Integrations(['fossa','sonarcloud']);
		this.kubernetes = new KubeConfig();
		this.dependencies = new Dependencies();
		this.go = new Go();
	}
}
