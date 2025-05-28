import { Events, type Interaction } from 'discord.js';
import { handleButtonInteraction } from '../buttons';

const execute = (interaction: Interaction) => {
  if (interaction.isButton()) {
    handleButtonInteraction(interaction);
  }
};

export default {
  name: Events.InteractionCreate,
  execute,
  once: false,
};
