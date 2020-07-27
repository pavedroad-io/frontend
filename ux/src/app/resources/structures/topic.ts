export class Topic {
	value: string;
	partitions: number;
	replication: number;

	constructor() {
		this.value = "topic";
		this.partitions = 1;
		this.replication = 1;
	}
}
