import { Command } from '@oclif/core'

export default class JavaSpringboot extends Command {

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log('Springboot Test! TEST')
  }
}
