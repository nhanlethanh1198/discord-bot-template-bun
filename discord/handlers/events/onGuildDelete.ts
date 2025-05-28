import { Events, Guild } from 'discord.js';
import GuildService from '../../../services/guild.service';

const execute = async (guild: Guild) => {
  logger.info(`Left guild: ${guild.name}`);
};

export default {
  name: Events.GuildDelete,
  execute,
  once: false,
};
