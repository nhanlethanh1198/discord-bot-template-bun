import {
  ChatInputCommandInteraction,
  MessageFlags,
  SlashCommandBuilder,
} from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply({
    content: 'Pong!',
    flags: MessageFlags.Ephemeral,
  });
};

export default { data, execute };
