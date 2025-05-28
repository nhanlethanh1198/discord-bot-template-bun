import { z } from 'zod';

const envSchema = z.object({
  DISCORD_BOT_TOKEN: z.string().min(1),
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_CLIENT_SECRET: z.string().min(1),
  DISCORD_BOT_PERMISSIONS: z.string().regex(/^\d+$/),
  DISCORD_OAUTH2_CALLBACK_URL: z.string().url(),
});

const parsedEnv = envSchema.parseSafe(Bun.env); // if not using Bun, use `process.env` instead of `Bun.env`

export const {

  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_OAUTH2_CALLBACK_URL,
  DISCORD_BOT_PERMISSIONS,
} = parsedEnv;
