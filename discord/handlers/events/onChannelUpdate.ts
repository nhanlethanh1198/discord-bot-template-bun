import { Events, GuildChannel, GuildMember, Role } from 'discord.js';
import ChannelService from '../../../services/channel.service';

const execute = async (channel: GuildChannel) => {
  const { id, name } = channel;

  if (name) {
    await ChannelService.updateChannel(id, { name });
  }
};

export default {
  name: Events.ChannelUpdate,
  execute,
  once: false,
};
