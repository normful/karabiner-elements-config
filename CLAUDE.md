# Karabiner Elements Config

This is a personal configuration for Karabiner Elements, a powerful and stable keyboard customizer for macOS.

## Project Structure

- `src/index.ts`: Main configuration file written in TypeScript using the karabiner.ts library.
- `package.json`: Project dependencies and scripts.
- `.gitignore`: Ignores node_modules.

## Features

The config includes several layers and rules:

- **Symbol Mode**: Activated by pressing '/', allows pasting modifier symbols.
- **Emoji Mode**: Activated by ';', maps keys to emojis.
- **Math Mode**: Activated by ''', maps keys to Greek letters and math symbols.
- **App Activation**: Cmd + number keys to activate frequent apps.
- **Language Toggle**: For specific keyboards, toggles between Japanese and English input.
- **Media Keys**: Custom media key mappings for certain keyboards.

## Building

Run `bun run build` to generate the Karabiner config.

## Usage

After building, the generated config can be imported into Karabiner Elements.