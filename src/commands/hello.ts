import { Command, flags } from "@oclif/command";
import { config } from "../index";

export default class Hello extends Command {
  static description = "describe the command here";

  static examples = [
    `$ trak hello
hello world from ./src/hello.ts!
`
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Hello);

    // example using conf to store a key/value pair
    config.set("unicorn", "🦄");

    const name = flags.name || "world";
    this.log(`hello ${name} from ./src/commands/hello.ts`);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
