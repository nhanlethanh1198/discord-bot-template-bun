import { Events, GuildMember } from 'discord.js';
import GuildMemberMissingQueue from '../../../queue/handleMemberMissing.queue';

/**
 * Emitted whenever a user joins a guild.
 * @param {GuildMember} member The member that has joined the guild
 */
const execute = async (member: GuildMember) => {
  logger.info(`Member joined guild: ${member.user.tag}`);
};

export default {
  name: Events.GuildMemberAdd,
  execute,
  once: false,
};
