'use client';

import * as THREE from 'three';

// Create Minecraft-style textures programmatically
export function createMinecraftTexture(
    baseColor: string,
    pattern: 'grass' | 'dirt' | 'stone' | 'wood' | 'diamond' | 'gold'
): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d')!;

    // Base color
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 16, 16);

    // Add pixelated pattern based on block type
    if (pattern === 'grass') {
        // Grass block - green with texture
        // Base color already set
        // Add grass texture
        const darkerGreen = '#5A8A2E';
        for (let i = 0; i < 16; i += 2) {
            for (let j = 0; j < 16; j += 2) {
                if (Math.random() > 0.5) {
                    ctx.fillStyle = darkerGreen;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    } else if (pattern === 'dirt') {
        // Dirt block - brown with texture
        const darkerBrown = '#6B5435';
        for (let i = 0; i < 16; i += 3) {
            for (let j = 0; j < 16; j += 3) {
                if (Math.random() > 0.6) {
                    ctx.fillStyle = darkerBrown;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    } else if (pattern === 'stone') {
        // Stone block - gray with texture
        const darkerGray = '#7A7A7A';
        const lighterGray = '#BDBDBD';
        for (let i = 0; i < 16; i += 2) {
            for (let j = 0; j < 16; j += 2) {
                if (Math.random() > 0.5) {
                    ctx.fillStyle = darkerGray;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
        for (let i = 0; i < 16; i += 4) {
            for (let j = 0; j < 16; j += 4) {
                if (Math.random() > 0.7) {
                    ctx.fillStyle = lighterGray;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    } else if (pattern === 'wood') {
        // Wood block - brown with grain
        const darkerWood = '#6D4C41';
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j += 2) {
                if (Math.random() > 0.7) {
                    ctx.fillStyle = darkerWood;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    } else if (pattern === 'diamond') {
        // Diamond block - cyan with sparkle
        const darkerCyan = '#0097A7';
        const lighterCyan = '#4DD0E1';
        for (let i = 0; i < 16; i += 2) {
            for (let j = 0; j < 16; j += 2) {
                if (Math.random() > 0.6) {
                    ctx.fillStyle = darkerCyan;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
        for (let i = 0; i < 16; i += 4) {
            for (let j = 0; j < 16; j += 4) {
                if (Math.random() > 0.8) {
                    ctx.fillStyle = lighterCyan;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    } else if (pattern === 'gold') {
        // Gold block - yellow with shine
        const darkerGold = '#FFA000';
        const lighterGold = '#FFD54F';
        for (let i = 0; i < 16; i += 2) {
            for (let j = 0; j < 16; j += 2) {
                if (Math.random() > 0.6) {
                    ctx.fillStyle = darkerGold;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
        for (let i = 0; i < 16; i += 3) {
            for (let j = 0; j < 16; j += 3) {
                if (Math.random() > 0.8) {
                    ctx.fillStyle = lighterGold;
                    ctx.fillRect(i, j, 1, 1);
                }
            }
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

// Create textures for all 6 faces of a Minecraft block
export function createMinecraftBlockTextures(
    pattern: 'grass' | 'dirt' | 'stone' | 'wood' | 'diamond' | 'gold'
): THREE.Texture[] {
    const textures: THREE.Texture[] = [];

    if (pattern === 'grass') {
        // Grass block has different textures for top, sides, and bottom
        textures.push(createMinecraftTexture('#7CB342', 'grass')); // Top
        textures.push(createMinecraftTexture('#8B6F47', 'dirt')); // Bottom
        textures.push(createMinecraftTexture('#7CB342', 'grass')); // Front
        textures.push(createMinecraftTexture('#7CB342', 'grass')); // Back
        textures.push(createMinecraftTexture('#7CB342', 'grass')); // Right
        textures.push(createMinecraftTexture('#7CB342', 'grass')); // Left
    } else {
        // Other blocks use the same texture on all sides
        const baseColor =
            pattern === 'dirt'
                ? '#8B6F47'
                : pattern === 'stone'
                  ? '#9E9E9E'
                  : pattern === 'wood'
                    ? '#8D6E63'
                    : pattern === 'diamond'
                      ? '#00BCD4'
                      : pattern === 'gold'
                        ? '#FFC107'
                        : '#000000';
        const texture = createMinecraftTexture(baseColor, pattern);
        for (let i = 0; i < 6; i++) {
            textures.push(texture.clone());
        }
    }

    return textures;
}
