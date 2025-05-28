import { Events, Role } from 'discord.js';

const execute = async (role: Role) => {
  logger.info(`Role update: ${role.name}`);
};

export default {
  name: Events.GuildRoleUpdate,
  execute,
  once: false,
};
