import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
    ButtonStyle,
} from 'discord.js';
import { ulid } from 'ulid';

export default async function handler(
    interaction: ButtonInteraction,
    id: string
) {
    if (interaction.customId !== id) return;

    const button = new ButtonBuilder()
        .setCustomId(ulid())
        .setLabel('Ping')
        .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    await interaction.reply({
        content: 'Pong!',
        components: [row],
        ephemeral: true,
    });
}
