import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('java:springboot', () => {
  it('runs java:springboot cmd', async () => {
    const {stdout} = await runCommand('java:springboot')
    expect(stdout).to.contain('hello world')
  })

  it('runs java:springboot --name oclif', async () => {
    const {stdout} = await runCommand('java:springboot --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
