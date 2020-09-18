import { ConfigurationFile } from './configuration-file';

export class ShieldOptions {
	name: string;
	description: string;
}

export class Options {
	badges: Array<ShieldOptions>;
	coverage: Coverage;
	goSec: GoSec;
	lint: Lint;
	vet: Vet;
}

export class Coverage {
	enable: boolean;
	report: string;
}

export class GoSec {
	enable: boolean;
	report: string;
}

export class Lint {
	enable: boolean;
	report: string;
}

export class Vet {
	enable: boolean;
	report: string;
}

export class sonarCloudConfig {
	login: string;
	key: string;
	options: Options;
	confiurationFile: ConfigurationFile;

	constructor(serviceName: string){
		this.key = "PavedRoad_(service name)";
		this.login = "generated";
		this.confiurationFile = new ConfigurationFile();
		this.options = new Options();
		this.options.coverage = new Coverage();
		this.options.goSec = new GoSec();
		this.options.lint = new Lint();
		this.options.vet = new Vet();
		this.options.badges = new Array(0);
		this.options.coverage.enable = true;
		this.options.coverage.report = "artifacts/coverage.out";
		this.options.goSec.enable = true;
		this.options.goSec.report = "artifacts/gosec.out";
		this.options.lint.enable = true;
		this.options.lint.report = "artifacts/lint.out";
		this.options.vet.enable = true;
		this.options.vet.report = "artifacts/govet.out";
		this.defaultShields();
	}

	defaultShields(){
		let types = [
			{
			name: 'alert_status',
			description: 'Alert status'
			}, {
			name: 'bugs',
			description: 'Bugs'
			}, {
			name: 'code_smells',
			description: 'Code smells'
			}, {
			name: 'coverage',
			description: 'Code coverage'
			}, {
			name: 'ncloc',
			description: 'Lines of code'
			}, {
			name: 'duplicated_lines_density',
			description: 'Duplicated line density'
			}, {
			name: 'security_rating',
			description: 'Security'
			}, {
			name: 'sqale_index',
			description: 'Time to fix technical debt'
			}, {
			name: 'vulnerabilities',
			description: 'Vulnerabilities'
			}
		];

		for (let item of types) {
			let x: ShieldOptions;
			x.name = item.name;
			x.description = item.description
			this.options.badges.push(x);
		}

	}
}
