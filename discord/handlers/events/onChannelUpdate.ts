import { Events, GuildChannel, GuildMember, Role } from 'discord.js';
import ChannelService from '../../../services/channel.service';

const execute = async (channel: GuildChannel) => {
  logger.info(`Channel updated: ${channel.name}`);
};

export default {
  name: Events.ChannelUpdate,
  execute,
  once: false,
};
