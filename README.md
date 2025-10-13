# Karabiner Elements Config

A personal keyboard customization config for macOS using [Karabiner Elements](https://karabiner-elements.pqrs.org/).

Built with [karabiner.ts](https://github.com/evan-liu/karabiner.ts) - see [docs](https://karabiner.ts.evanliu.dev).

## Features

- **Symbol Mode**: Press `/` to paste modifier symbols (⌘, ⌥, etc.).
- **Emoji Mode**: Press `;` to paste emojis (😊, 👍, etc.).
- **Math Mode**: Press `'` to paste Greek letters and math symbols (α, ∑, etc.).
- **App Shortcuts**: Cmd + number keys to activate apps (WezTerm, Vivaldi, etc.).
- **Language Toggle**: Right Option toggles Japanese/English on specific keyboards.
- **Media Keys**: Custom mappings for brightness and volume.

## Setup

1. Install [Karabiner Elements](https://karabiner-elements.pqrs.org/).
2. Clone this repo.
3. Run `bun install`.

## Build

```bash
bun run build
```

This generates the Karabiner config file.

## Import

Import the generated config into Karabiner Elements via the GUI.