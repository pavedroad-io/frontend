import { sonarCloudConfig } from './sonar-cloud-config';

describe('sonarCloudConfig', () => {
  it('should create an instance', () => {
    expect(new sonarCloudConfig()).toBeTruthy();
  });
});
