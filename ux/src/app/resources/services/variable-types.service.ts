import { Injectable } from '@angular/core';

export interface IvariableTypes {
	key: string;
	icon: string;
	description: string;
	toolTip: string;
	enable: boolean;
}

export interface IvariableTypesConfig {
		classes: string;
		elementType: string;
		dropList: string;
}

export const DEFAULT_VAR_CONFIG: IvariableTypesConfig = {
		classes: "left",
		elementType: "mat-chip",
		dropList: "drop-tile"
};

@Injectable({
  providedIn: 'root'
})

export class VariableTypesService {
	config: IvariableTypesConfig = DEFAULT_VAR_CONFIG;
	data: Array<IvariableTypes> = [
		{ key: "string", icon: "", description: "A string value consisting of: A-Z, a-z, 0-9 or _", toolTip: "A-Z, a-z, 0-9 or _", enable: true },
		{ key: "number", icon: "", description: "A floating point number", toolTip: "Floating point number 123.000", enable: true },
		{ key: "integer", icon: "", description: "A integer number: 123", toolTip: "integer number 123", enable: true },
		{ key: "boolean", icon: "", description: "true or false", toolTip: "true or false", enable: true },
		{ key: "time", icon: "", description: "Date / Time type", toolTip: "Date / Time type", enable: true },
		{ key: "uuid", icon: "", description: "Universally unique identifier V4", toolTip: "Universally unique identifier", enable: true },
		{ key: "object", icon: "", description: "Create a sub-object", toolTip: "Create a sub-object", enable: true },
		{ key: "array", icon: "", description: "An array of types or objects", toolTip: "An array of types or objects", enable: false }
	];

	constructor() { 
	}

  getTypes() {
		return this.data;
  }

	getConfig() {
		return this.config;
	}
}
