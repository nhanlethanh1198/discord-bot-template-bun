import { Events, Guild } from 'discord.js';

const execute = async (guild: Guild) => {
  logger.info(`Joined guild: ${guild.name}`);
};

export default {
  name: Events.GuildCreate,
  execute,
  once: false,
};
