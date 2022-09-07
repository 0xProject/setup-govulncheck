import * as govulncheck from './govulncheck';
import * as core from '@actions/core';

export async function run() {
  const options: govulncheck.Options = {
    version: core.getInput('version')
  };

  if (options.version === '') {
    options.version = 'latest';
  }

  await govulncheck.install(options);
}
