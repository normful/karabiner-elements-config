# Karabiner Elements Config

A personal keyboard customization config for macOS using [Karabiner Elements](https://karabiner-elements.pqrs.org/).

Built with [karabiner.ts](https://github.com/evan-liu/karabiner.ts) - see [docs](https://karabiner.ts.evanliu.dev).

## Features

### Layers

Layers are activated using duoLayer mechanics: hold both activation keys, (optionally) release one, then press one or more mapped keys.

- **Symbol Mode**: Hold Z+S, release one, then press keys to paste modifier symbols and special keys:
  - 1-5: ⌘, ⌥, ⌃, ⇧, ⇪ (modifier symbols)
  - Special keys: ←, →, ↑, ↓, ␣, ⏎, ⇥, ⎋, ⌫, ⌦, ⇪

- **Emoji Mode**: Hold Z+E, release one, then press keys to paste emojis:
  - Numbers 0-9: Various fruits (🍒, 🍎, 🍊, 🍋, 🍌, 🍉, 🍇, 🍓, 🍑, 🍍)
  - Letters: Various emojis (😮, 🐻, 😎, 🐱, 🐰, 🔥, 🐶, 😊, 💡, 🤪, 🐸, 😂, 🦊, 👎, 👌, 🐧, ❓, 😡, 😢, 😴, 🤮, 🥦, 😞, 👍, 🤐)

- **Math Mode**: Hold Z+M, release one, then press keys to paste Greek letters, math symbols, and superscripts:
  - Greek letters: α, β, χ, δ, ε, η, γ, ι, κ, λ, μ, ν, ο, ω, φ, π, ψ, ρ, σ, τ, θ, ξ, ζ
  - Math symbols: ∑, ∫, √
  - Superscripts: ¹-⁰
  - Operators: ≠, ÷, ⋅

### Rules

- **Escape with Japanese Eisuu**: Escape key sends both escape and Japanese Eisuu key.

- **Vivaldi New Tab with Focus**: Cmd+Shift+N opens a new tab in Vivaldi and focuses the app.

- **Focus Frequent Apps**:
  - Cmd+`: Activate Finder
  - Cmd+1: Activate WezTerm
  - Cmd+2: Activate Vivaldi
  - Cmd+3: Activate Notion
  - Cmd+4: Activate Jan

### Keyboard-Specific Rules

#### Builtin MacBook Keyboard (Vendor ID: 1452, Product ID: 834)

- **Right Option Language Toggle**: Right Option toggles between Japanese and English input sources.
- **Media Keys**: Right Option + Right Shift + Fn keys:
  - F1: Decrease brightness
  - F2: Increase brightness
  - F10: Mute
  - F11: Decrease volume
  - F12: Increase volume

#### Yunzii B68 Keyboard (Vendor ID: 13652, Product IDs: 64007 and 64009)

- **Right Option Language Toggle**: Right Option (Del key) toggles between English and Japanese input sources.
- **Media Keys Layer**: Hold Page Up to activate media layer:
  - 1: Decrease brightness
  - 2: Increase brightness
  - 0: Mute
  - -: Decrease volume
  - =: Increase volume

## Setup

1. Install [Karabiner Elements](https://karabiner-elements.pqrs.org/).
2. Clone this repo.
3. Run `bun install`.

## Install Config

```bash
bun run install-config
```

This installs the config into Karabiner Elements. You don't need to click anything in Karabiner Elements.
