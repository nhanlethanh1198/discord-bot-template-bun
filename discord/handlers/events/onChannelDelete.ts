import { Events, GuildChannel } from 'discord.js';

const execute = async (channel: GuildChannel) => {
  logger.info(`Channel deleted: ${channel.name}`);
};

export default {
  name: Events.ChannelDelete,
  execute,
  once: false,
};
