import { SelectOptions } from './select-options';
export class Go {
		dependencyManger: string;

	constructor() {
		this.dependencyManger = "dep";
	}

	getDependcyManagementOptions(): Array<SelectOptions> {
		let dependencyOptions: Array<SelectOptions> = [{
			selected: true,
			name: "dep",
			displayName: "Dep",
			icon: ""
			}, {
			selected: false,
			name: "modules",
			displayName: "Modules",
			icon: ""
		}];

	return dependencyOptions;
	}
}
