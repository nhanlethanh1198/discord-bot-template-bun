import { Events } from 'discord.js';

const execute = async (error: any) => {
  logger.error(error);
};

export default {
  name: Events.Error,
  execute,
  once: false,
};
