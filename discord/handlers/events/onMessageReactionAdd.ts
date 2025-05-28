import { Events, type MessageReaction, type User } from 'discord.js';

const execute = async (reaction: MessageReaction, user: User) => {
  logger.info(`Reaction created: ${reaction.emoji.name} by ${user.tag}`);
};

export const onMessageReactionCreate = {
  name: Events.MessageReactionAdd,
  once: false,
  execute,
};
