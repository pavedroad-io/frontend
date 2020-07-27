import { Topic } from './topic';
import { Ports } from './ports';
import { KeyValue } from './key-value';

export class Dependencies {
	command: string;
	comments: string;
	dockerCockroachDb: string;
	image: string;
	name: string;
	ports: Array<Ports>;
	volumns: Array<string>;
	dockerKafka: string;
	topics: Array<Topic>;
	environment: Array<KeyValue>;

	constructor() {
		this.command = "";
		this.comments = "";
		this.dockerKafka = "";
		this.dockerCockroachDb = "";
		this.ports = new Array<Ports>(0);
		let p: Ports = new Ports();
		this.ports.push(p);
		this.volumns = new Array(0);
		this.volumns.push("");
		this.topics = new Array<Topic>(0);
		let t: Topic = new Topic();
		this.topics.push(t);
		this.environment = new Array(0);
	}
}
