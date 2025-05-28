import { Events, GuildMember } from 'discord.js';

const execute = async (guildMember: GuildMember) => {
  logger.info(`Role removed: ${guildMember.user.tag}`);
};

export default {
  name: Events.GuildMemberRemove,
  execute,
  once: false,
};
