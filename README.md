trak-cli
========

Log &amp; time tracker for the command line.

[![Version](https://img.shields.io/npm/v/trak-cli.svg)](https://npmjs.org/package/trak-cli)
[![CircleCI](https://circleci.com/gh/lol-russo/trak-cli/tree/master.svg?style=shield)](https://circleci.com/gh/lol-russo/trak-cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/lol-russo/trak-cli?branch=master&svg=true)](https://ci.appveyor.com/project/lol-russo/trak-cli/branch/master)
[![Codecov](https://codecov.io/gh/lol-russo/trak-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/lol-russo/trak-cli)
[![Downloads/week](https://img.shields.io/npm/dw/trak-cli.svg)](https://npmjs.org/package/trak-cli)
[![License](https://img.shields.io/npm/l/trak-cli.svg)](https://github.com/lol-russo/trak-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g trak-cli
$ trak COMMAND
running command...
$ trak (-v|--version|version)
trak-cli/0.0.0 darwin-x64 node-v9.2.0
$ trak --help [COMMAND]
USAGE
  $ trak COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`trak hello [FILE]`](#trak-hello-file)
* [`trak help [COMMAND]`](#trak-help-command)

## `trak hello [FILE]`

describe the command here

```
USAGE
  $ trak hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ trak hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/lol-russo/trak-cli/blob/v0.0.0/src/commands/hello.ts)_

## `trak help [COMMAND]`

display help for trak

```
USAGE
  $ trak help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.11/src/commands/help.ts)_
<!-- commandsstop -->
