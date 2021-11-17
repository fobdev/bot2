import { Command } from "../../interfaces";
import { Response } from "../../models";

export const Shuffle: Command = {
    name: ["shuffle", "sf"],
    description: "Randomize all the tracks in the queue.",
    run: async (prefix, client, message, args, player) => {
        const { guild, channel } = message;

        const shufflingQueue = player?.getQueue(guild!.id);

        if (!shufflingQueue) {
            return channel.send({
                embeds: [
                    Response(
                        "No queue in the server",
                        "Try using``" +
                            prefix +
                            "play`` with a Spotify or Youtube playlist to create a queue for this server.",
                        "WARN"
                    ),
                ],
            });
        }

        try {
            shufflingQueue?.shuffle();
            return channel.send({
                embeds: [
                    Response(
                        `${shufflingQueue?.tracks.length} tracks shuffled.`,
                        "Use ``" + `${prefix}queue` + "`` to see the result.",
                        "OTHER",
                        "PURPLE"
                    ).setThumbnail(shufflingQueue.tracks[0].thumbnail),
                ],
            });
        } catch (error) {
            console.error(error);
        }
    },
};
