import {
  Events,
  type Message,
  type OmitPartialGroupDMChannel,
} from 'discord.js';

import type { DCMessageEvent } from '../../../types/discord.type';

const execute = async (message: DCMessageEvent) => {
  if (message.author.bot) return;
  logger.info(`Message received: ${message.content}`);
};

export default {
  name: Events.MessageCreate,
  execute,
  once: false,
};
