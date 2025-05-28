import { Client, Events } from 'discord.js';

const execute = async (client: Client) => {
  logger.info(`Discord Bot Logged in as ${client.user?.tag}!`);
};

export default {
  name: Events.ClientReady,
  once: true,
  execute,
};
