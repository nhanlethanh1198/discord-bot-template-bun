import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.string().regex(/^\d+$/), // assuming PORT is always a stringified number
  APP_JWT_SECRET: z.string().min(1),
  CLIENT_URL: z.string().url(),
  DISCORD_BOT_TOKEN: z.string().min(1),
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_CLIENT_SECRET: z.string().min(1),
  REDIS_URL: z.string().url(),
  DISCORD_OAUTH2_CALLBACK_URL: z.string().url(),
  COOKIE_DOMAIN: z.string().optional().nullable(),
  DISCORD_BOT_PERMISSIONS: z.string().regex(/^\d+$/),
  ENCRYPTION_KEY: z
    .string()
    // .refine((key) => key.length === 32 || key.length === 64, {
    //   message: 'ENCRYPTION_KEY must be 32 or 64 characters long',
    // })
    .optional()
    .nullable(),
  OPTIMIZE_API_KEY: z.string().optional().nullable(),
  ALLOWED_ORIGINS: z.string().optional().nullable(),
});

const parsedEnv = envSchema.parse(Bun.env);

export const {
  DATABASE_URL,
  PORT,
  APP_JWT_SECRET,
  CLIENT_URL,
  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
  COOKIE_DOMAIN,
  DISCORD_CLIENT_SECRET,
  REDIS_URL,
  DISCORD_OAUTH2_CALLBACK_URL,
  DISCORD_BOT_PERMISSIONS,
  ENCRYPTION_KEY,
  OPTIMIZE_API_KEY,
  ALLOWED_ORIGINS,
} = parsedEnv;
