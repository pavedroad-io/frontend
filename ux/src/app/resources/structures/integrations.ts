import { Badges } from './badges';
import { sonarCloudConfig } from './sonar-cloud-config';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Integrations {
	// TODO: Move this to a Fossa configuration
	badges: Array<Badges>;
	name: string;
	enable: boolean;
	//@JsonProperty('sonar-cloud-config')
	sonarCloudConfig: sonarCloudConfig;

	constructor(defaults?: string[]) {
		if (defaults.length > 0) {
			for ( let item of defaults ) {
				switch(item) {
					case "sonarcloud":
						this.defaultSonarCloudConfiguration();
					break;
					case "fossa":
						this.defaultFossaConfiguration();
					break;
					default:
					console.log("Unkonwn integration: ", item);
				}
			}
		}
	}

	defaultFossaConfiguration() {
		this.name = "fossa";
		this.enable = true;
		this.badges = Array(1);
		let fossaBadge = new Badges();
		fossaBadge.name = "FOSSA";
		fossaBadge.enable = true;
		fossaBadge.link = '<a href="https://app.fossa.com/projects/custom%2B9819%2Ffilms?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/custom%2B9819%2Ffilms.svg?type=shield"/></a>';
		this.badges.push(fossaBadge);
	}

	defaultSonarCloudConfiguration() {
		this.sonarCloudConfig = new sonarCloudConfig("app");
	}
}
