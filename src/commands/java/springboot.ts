import { Command } from '@oclif/core'

import { getModels } from '../../java/springboot/getmodels.js'
import { getPaths } from '../../java/springboot/getpaths.js'

export default class JavaSpringboot extends Command {

  static override description = 'Automated Functionality test for java springboot REST API applications.'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Springboot testing ...')

    const models: { [className: string]: { name: string; type: string; }[]; } = getModels();
    this.log('Models found:', models);

    const paths: { [controllerName: string]: { path: string; type: string; }[]; } = getPaths();
    this.log('Paths found:', paths);
  }
}
