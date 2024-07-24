functest
=================

A Cli for automated REST API Functional testing


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/functest.svg)](https://npmjs.org/package/functest)
[![Downloads/week](https://img.shields.io/npm/dw/functest.svg)](https://npmjs.org/package/functest)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g functest
$ functest COMMAND
running command...
$ functest (--version)
functest/0.0.25 darwin-arm64 node-v22.3.0
$ functest --help [COMMAND]
USAGE
  $ functest COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`functest help [COMMAND]`](#functest-help-command)
* [`functest java springboot`](#functest-java-springboot)
* [`functest plugins`](#functest-plugins)
* [`functest plugins add PLUGIN`](#functest-plugins-add-plugin)
* [`functest plugins:inspect PLUGIN...`](#functest-pluginsinspect-plugin)
* [`functest plugins install PLUGIN`](#functest-plugins-install-plugin)
* [`functest plugins link PATH`](#functest-plugins-link-path)
* [`functest plugins remove [PLUGIN]`](#functest-plugins-remove-plugin)
* [`functest plugins reset`](#functest-plugins-reset)
* [`functest plugins uninstall [PLUGIN]`](#functest-plugins-uninstall-plugin)
* [`functest plugins unlink [PLUGIN]`](#functest-plugins-unlink-plugin)
* [`functest plugins update`](#functest-plugins-update)

## `functest help [COMMAND]`

Display help for functest.

```
USAGE
  $ functest help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for functest.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.4/src/commands/help.ts)_

## `functest java springboot`

Automated Functionality test for java springboot REST API applications.

```
USAGE
  $ functest java springboot

DESCRIPTION
  Automated Functionality test for java springboot REST API applications.

EXAMPLES
  $ functest java springboot
```

_See code: [src/commands/java/springboot.ts](https://github.com/SlothManDan/REST-FuncTest/blob/v0.0.25/src/commands/java/springboot.ts)_

## `functest plugins`

List installed plugins.

```
USAGE
  $ functest plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ functest plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/index.ts)_

## `functest plugins add PLUGIN`

Installs a plugin into functest.

```
USAGE
  $ functest plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into functest.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUNCTEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUNCTEST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ functest plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ functest plugins add myplugin

  Install a plugin from a github url.

    $ functest plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ functest plugins add someuser/someplugin
```

## `functest plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ functest plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ functest plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/inspect.ts)_

## `functest plugins install PLUGIN`

Installs a plugin into functest.

```
USAGE
  $ functest plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into functest.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUNCTEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUNCTEST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ functest plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ functest plugins install myplugin

  Install a plugin from a github url.

    $ functest plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ functest plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/install.ts)_

## `functest plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ functest plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ functest plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/link.ts)_

## `functest plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ functest plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ functest plugins unlink
  $ functest plugins remove

EXAMPLES
  $ functest plugins remove myplugin
```

## `functest plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ functest plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/reset.ts)_

## `functest plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ functest plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ functest plugins unlink
  $ functest plugins remove

EXAMPLES
  $ functest plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/uninstall.ts)_

## `functest plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ functest plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ functest plugins unlink
  $ functest plugins remove

EXAMPLES
  $ functest plugins unlink myplugin
```

## `functest plugins update`

Update installed plugins.

```
USAGE
  $ functest plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.3/src/commands/plugins/update.ts)_
<!-- commandsstop -->
