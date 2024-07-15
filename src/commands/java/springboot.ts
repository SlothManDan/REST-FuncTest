import { Command } from '@oclif/core'

import { getModels } from '../../java/springboot/getmodels.js'

export default class JavaSpringboot extends Command {

  static override description = 'Automated Functionality test for java springboot REST API applications.'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Springboot testing ...')

    const models: { [key: string]: { name: string; type: string; }[]; } = getModels();
    this.log('Models found:', Object.keys(models));
  }
}
