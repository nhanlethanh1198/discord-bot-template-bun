import { Events, Role } from 'discord.js';

const execute = async (role: Role) => {
  logger.info(`Role deleted: ${role.name}`);
};

export default {
  name: Events.GuildRoleDelete,
  execute,
  once: false,
};
