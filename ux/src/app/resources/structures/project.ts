import { Dependencies } from './dependencies';
import { Maintainer } from './maintainer';
import { ProjectFiles } from './project-files';
import { Integrations } from './integrations';
import { KubeConfig } from './kube-config';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Project {
	@JsonProperty('top_level_domain')
	  tld:           string;
    description:   string;
    dependencies:  Dependencies;
    license:       string;
	@JsonProperty('scheduler_name')
    schedulerName: string;
    maintainer:    Maintainer;
	@JsonProperty('project-files')
		projectFiles:  Array<ProjectFiles>;
		integrations:  Array<Integrations>;
    kubernetes:    KubeConfig;
}
