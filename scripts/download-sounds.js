const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create sounds directory if it doesn't exist
const soundsDir = path.join(__dirname, '..', 'public', 'sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
}

// Sound URLs from Minecraft assets
const sounds = {
  click: [
    'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.4/assets/minecraft/sounds/ui/button_click.ogg',
    'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/sounds/ui/button_click.ogg',
  ],
  stone: [
    'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.4/assets/minecraft/sounds/block/stone/place1.ogg',
    'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/sounds/block/stone/place1.ogg',
  ],
  wood: [
    'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.4/assets/minecraft/sounds/block/wood/place1.ogg',
    'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/sounds/block/wood/place1.ogg',
  ],
  plop: [
    'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.4/assets/minecraft/sounds/entity/item/pickup.ogg',
    'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/sounds/entity/item/pickup.ogg',
  ],
  pop: [
    'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.4/assets/minecraft/sounds/ui/button_click.ogg',
    'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/sounds/ui/button_click.ogg',
  ],
};

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadSound(name, urls) {
  const filepath = path.join(soundsDir, `${name}.ogg`);
  
  // Skip if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`✓ ${name}.ogg already exists, skipping...`);
    return;
  }
  
  console.log(`Downloading ${name}.ogg...`);
  
  for (const url of urls) {
    try {
      await downloadFile(url, filepath);
      console.log(`✓ Successfully downloaded ${name}.ogg`);
      return;
    } catch (error) {
      console.log(`✗ Failed to download from ${url}: ${error.message}`);
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
    }
  }
  
  console.log(`✗ Failed to download ${name}.ogg from all sources`);
}

async function main() {
  console.log('Downloading Minecraft sounds...\n');
  
  for (const [name, urls] of Object.entries(sounds)) {
    await downloadSound(name, urls);
  }
  
  console.log('\nDone!');
}

main().catch(console.error);

