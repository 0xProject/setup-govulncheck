import * as exec from '@actions/exec';

export interface Options {
  version: string;
}

export async function install(options: Options): Promise<number> {
  const args = [
    'install',
    `golang.org/x/vuln/cmd/govulncheck@${options.version}`
  ];

  return await exec.exec('go', args);
}
