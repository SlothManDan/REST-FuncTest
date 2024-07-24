import { Command } from '@oclif/core'

import { linkModelsToPaths } from '../../java/springboot/linkmodelstopaths.js'

export default class JavaSpringboot extends Command {

  static override description = 'Automated Functionality test for java springboot REST API applications.'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Springboot testing ...')

    const linkedModels = linkModelsToPaths();
    this.log(JSON.stringify(linkedModels));
  }
}
