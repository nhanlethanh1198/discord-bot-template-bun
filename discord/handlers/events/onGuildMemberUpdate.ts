import { Events, GuildMember } from 'discord.js';

const execute = async (guildMember: GuildMember) => {
  logger.info(`Member left the guild: ${guildMember.guild.name}`);
};

export default {
  name: Events.GuildMemberUpdate,
  execute,
  once: false,
};
