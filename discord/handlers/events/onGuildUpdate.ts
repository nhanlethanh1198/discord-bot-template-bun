import { Events, Guild } from 'discord.js';

const execute = async (guild: Guild) => {
  logger.info(`Guild Updated: ${guild.name}`);
};

export default {
  name: Events.GuildUpdate,
  execute,
  once: false,
};
