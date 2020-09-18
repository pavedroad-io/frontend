import { Badges } from './badges';
import { sonarCloudConfig } from './sonar-cloud-config';

export class Integrations {
	// TODO: Move this to a Fossa configuration
	badges: Array<string>;
	name: string;
	enable: boolean;
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
					case "go":
						this.defaultGoConfiguration();
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
		this.badges = Array(0);
		this.badges.push("fossa");
	}

	defaultSonarCloudConfiguration() {
		this.sonarCloudConfig = new sonarCloudConfig("app");
	}

	defaultGoConfiguration() {
		this.name = "go";
		this.enable = true;
		this.badges = Array(0);
		this.badges.push("goreport");
	}
}
