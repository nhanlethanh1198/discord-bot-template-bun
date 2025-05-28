import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  Partials,
} from 'discord.js';
import setCommandList from './discord/handlers/commands';
import setEvents from './discord/handlers/events';
import './utils/logger';
import { DISCORD_BOT_TOKEN } from './config/environment';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, any>;
    cooldown: Collection<string, any>;
  }
}

logger.warn('Bot is starting...');

export const botClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildScheduledEvents,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
  ],
});

botClient.commands = new Collection<string, any>();

setCommandList(botClient);
setEvents(botClient);

// start the bot
botClient.login(DISCORD_BOT_TOKEN)
