import { MessageFlags, type ButtonInteraction, type Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

const buttonsPath = path.join(__dirname);
const buttonFiles = fs
  .readdirSync(buttonsPath)
  .filter((file) => !file.startsWith('index') && file.endsWith('.ts'));

const handlers = new Map<
  string,
  (interaction: ButtonInteraction, id: string) => Promise<void>
>();

// Dynamically import all button handlers
for (const file of buttonFiles) {
  const prefix = file.replace(/\.ts$/, '') + '-';
  const handler = require(path.join(buttonsPath, file)).default;

  handlers.set(prefix, handler);
}

/**
 * Handles button interactions by matching the custom ID with registered handlers.
 * @param {ButtonInteraction} interaction - The button interaction to handle.
 */
export async function handleButtonInteraction(interaction: ButtonInteraction) {
  const customId = interaction.customId;
  const matchedPrefix = Array.from(handlers.keys()).find((prefix) =>
    customId.startsWith(prefix)
  );

  if (!matchedPrefix) return;

  // Extract the ID after the prefix
  const id = customId.slice(matchedPrefix.length);
  if (!id) {
    await interaction.reply({
      content: 'Invalid button interaction ID.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }
  // Find the handler for the matched prefix
  const handler = handlers.get(matchedPrefix);

  if (!handler) return;

  try {
    await handler(interaction, id);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: error?.message || 'Something went wrong',
      flags: MessageFlags.Ephemeral,
    });
  }
}
