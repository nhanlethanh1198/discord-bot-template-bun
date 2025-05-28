import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('start')
  .setDescription('Start the game');

const execute = async (interaction: any) => {
  await interaction.reply('Start the game');
};

export default { data, execute };
