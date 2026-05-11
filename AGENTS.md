# Karabiner Elements Config — Coding Assistant Instructions

Personal Karabiner Elements config for macOS keyboard customization using `karabiner.ts`.

## Source of truth

- `src/index.ts` — the entire configuration
- `package.json` — dependencies and scripts

## Scripts

```bash
bun run install-config   # generate and install Karabiner config
bun run format           # format source with Biome
```

## Project conventions

- Uses [karabiner.ts](https://karabiner.ts.evanliu.dev) to generate `~/.config/karabiner/karabiner.json`
- All rules are defined as functions in `src/index.ts` and passed to `writeToProfile("Default profile", [...])`
- Device-specific rules use `ifDevice()` conditions with vendor/product IDs from Karabiner Elements Devices tab
