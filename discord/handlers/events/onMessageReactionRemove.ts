import { Events, MessageReaction } from 'discord.js';

const execute = async (reaction: MessageReaction) => {
  logger.info(`Reaction removed: ${reaction.emoji.name}`);
};

export default {
  name: Events.MessageReactionRemove,
  execute,
  once: false,
};
