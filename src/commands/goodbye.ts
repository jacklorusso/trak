import { Command } from "@oclif/command";

import { config } from "../index";

export class GoodbyeCommand extends Command {
  async run() {
    // example using conf to retrieve a key/value pair
    console.log(config.get("unicorn"));
  }
}
