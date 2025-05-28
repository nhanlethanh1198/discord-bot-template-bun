import { MessageFlags, REST, Routes, type Client } from 'discord.js';
import {
  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
} from '../../../config/environment';
import logger from '../../../utils/logger';
import ping from './ping';
import start from './start';

const commands = [ping, start];

const registerCommands = async () => {
  const rest = new REST().setToken(DISCORD_BOT_TOKEN!);
  try {
    const data: any = await rest.put(
      Routes.applicationCommands(DISCORD_CLIENT_ID!),
      {
        body: commands.map((command) => command.data.toJSON()),
      }
    );

    logger.info(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

export default function setCommandList(client: Client) {
  for (const command of commands) {
    client.commands.set(command.data.name, command);
  }

  logger.info(
    `Loaded ${client.commands.size} commands: ${client.commands
      .map((c) => c.data.name)
      .join(', ')}`
  );

  registerCommands();

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      logger.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      logger.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: 'There was an error while executing this command!',
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: 'There was an error while executing this command!',
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  });
}
