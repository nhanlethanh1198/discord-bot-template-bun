import type { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

export default function setEvents(client: Client) {
  const eventsPath = path.join(__dirname);
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => !file.startsWith('index') && file.endsWith('.ts'));

  try {
    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);

      const event = require(filePath);
      const eventDefault = event.default ? event.default : event;

      if (eventDefault.once) {
        client.once(eventDefault.name, (...args) =>
          eventDefault.execute(...args)
        );
      } else {
        client.on(eventDefault.name, (...args) =>
          eventDefault.execute(...args)
        );
      }
    }

    logger.info(
      `Loaded ${eventFiles.length} events: ${eventFiles
        .map((f) => f.slice(0, -3))
        .join(', ')}`
    );
  } catch (error) {
    console.error(error);
  }
}
