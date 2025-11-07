# Minecraft Sounds

This folder is for local Minecraft sound files. The application will try to load sounds from this folder first, then fallback to CDN.

## How to add local Minecraft sounds:

1. Download Minecraft sound files (`.ogg` format) from:
    - GitHub: https://github.com/InventivetalentDev/minecraft-assets
    - Or extract from your Minecraft installation

2. Place the sound files in this folder with these names:
    - `click.ogg` - for UI button clicks
    - `stone.ogg` - for stone block sounds
    - `wood.ogg` - for wood block sounds
    - `plop.ogg` - for item pickup sounds
    - `pop.ogg` - for pop/click sounds

3. The application will automatically use local files if they exist, otherwise it will use CDN.

## Current Implementation

The application currently uses actual Minecraft sounds from:

- CDN: jsDelivr (serving GitHub minecraft-assets repository)
- These are real Minecraft sound files from version 1.20.4
