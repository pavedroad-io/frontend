import { KubeConfig } from './kube-config';

describe('KubeConfig', () => {
  it('should create an instance', () => {
    expect(new KubeConfig()).toBeTruthy();
  });
});
