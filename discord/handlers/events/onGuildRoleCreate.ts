import { Events, Role } from 'discord.js';

const execute = async (role: Role) => {
  logger.info(`New Role created in guild: ${role}`);
};

export default {
  name: Events.GuildRoleCreate,
  execute,
  once: false,
};
