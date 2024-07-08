import { Command } from '@oclif/core'

import { getPort } from '../../java/springboot/getport.js'

export default class JavaSpringboot extends Command {

  static override description = 'Automated Functionality test for java springboot REST API applications.'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Springboot testing ...')
    this.log('Port:', getPort)
  }
}
