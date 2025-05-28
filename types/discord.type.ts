import type { Message, OmitPartialGroupDMChannel } from 'discord.js';

export type DCMessageEvent = OmitPartialGroupDMChannel<Message>;
