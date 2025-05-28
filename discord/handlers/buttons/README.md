# Important

Naming `customId` for each button is very important. This source can be auto extract the ID after the prefix. You can see the logic in in `/discord/handlers/buttons/index.ts`

```typescript
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
```

