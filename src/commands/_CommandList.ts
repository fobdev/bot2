import { Command } from "../interfaces";
import { forEach } from "lodash";

import * as AdminCommands from "./admin";
import * as BotCommands from "./bot";
import * as MusicCommands from "./music";

let getCollection = (collection: any) => {
    let commandsArray: Array<Command> = [];

    forEach(AdminCommands, (command) => {
        commandsArray.push(command);
    });

    return commandsArray;
};

export const CommandList: Array<Command> = [];

(async () => {
    CommandList.push(...getCollection(AdminCommands));
    CommandList.push(...getCollection(BotCommands));
    CommandList.push(...getCollection(MusicCommands));
})();
