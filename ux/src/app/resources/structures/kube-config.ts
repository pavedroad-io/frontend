export class KubeConfig {
	namespace: string;
	liveness: string;
	readiness: string;
	metrics: string;
	management: string;

	constructor() {
		this.namespace = "yourco";
		this.liveness = "liveness";
		this.readiness = "ready";
		this.metrics = "metrics";
		this.management = "management";
	}
}
