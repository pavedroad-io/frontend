import { ConfigurationFile } from './configuration-file';
import { Badges } from './badges';

export class sonarCloudConfig {
	login: string;
	key: string;
	options: {
		badges: Array<Badges>;
	  coverage: {
			enable: boolean;
			report: string;
		},
	  goSec: {
			enable: boolean;
			report: string;
		},
	  lint: {
			enable: boolean;
			report: string;
		}
	};
	confiurationFile: ConfigurationFile;
}
