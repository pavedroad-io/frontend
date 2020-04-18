import { Topic } from './topic';
import { Ports } from './ports';
import { deserialize, JsonProperty } from 'json-typescript-mapper';

export class Dependencies {
	command: string;
	comments: string;
	@JsonProperty('docker-cockroahdb')
	dockerCockroachDb: string;
	image: string;
	name: string;
	ports: Array<Ports>;
	volumns: Array<string>;
	@JsonProperty('docker-kafka')
	dockerKafka: string;
	topics: Array<Topic>;
}
