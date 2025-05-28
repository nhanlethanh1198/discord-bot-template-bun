import { Events, GuildChannel } from 'discord.js';

const execute = async (channel: GuildChannel) => {
  logger.info(`Channel created: ${channel.name}`);
};

export default {
  name: Events.ChannelCreate,
  execute,
  once: false,
};
