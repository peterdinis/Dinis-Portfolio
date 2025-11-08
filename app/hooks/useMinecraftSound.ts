'use client';

import { useCallback, useRef } from 'react';

// Definujeme typ všetkých podporovaných zvukov
export type SoundType = 'click' | 'stone' | 'wood' | 'plop' | 'pop';

/**
 * Hook to play Minecraft-like sound effects
 */
export function useMinecraftSound() {
    // Cache pre audio elementy
    const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

    const playSound = useCallback(
        (type: SoundType = 'click', volume: number = 0.5) => {
            if (typeof window === 'undefined') return;

            const tryPlayFromLocal = () => {
                try {
                    const soundUrls = getMinecraftSoundURLs(type);
                    if (!soundUrls || soundUrls.length === 0) {
                        playFallbackSound(type, volume);
                        return;
                    }

                    const cacheKey = `${type}-local`;
                    let audio = audioCache.current.get(cacheKey);

                    if (!audio) {
                        audio = new Audio();
                        audio.volume = Math.max(0, Math.min(1, volume));
                        audio.preload = 'auto';
                        audio.src = soundUrls[0];

                        audio.addEventListener(
                            'error',
                            () => playFallbackSound(type, volume),
                            { once: true },
                        );

                        audioCache.current.set(cacheKey, audio);
                    }

                    audio.currentTime = 0;
                    audio.volume = Math.max(0, Math.min(1, volume));

                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() =>
                            playFallbackSound(type, volume),
                        );
                    }
                } catch (error) {
                    console.error('Error playing local sound:', error);
                    playFallbackSound(type, volume);
                }
            };

            tryPlayFromLocal();
        },
        [],
    );

    return { playSound };
}

/**
 * Mapovanie typov zvukov na URL súbory
 */
function getMinecraftSoundURLs(type: SoundType): string[] {
    const soundFiles: Record<SoundType, string[]> = {
        click: ['/sounds/Voicy_Say2 - spider.mp3'],
        stone: ['/sounds/Voicy_Strong4 - attack.mp3'],
        wood: ['/sounds/Voicy_Shoot1 - crossbow.mp3'],
        plop: ['/sounds/Voicy_Shoot1 - crossbow.mp3'],
        pop: ['/sounds/Voicy_Strong4 - attack.mp3'],
    };
    return soundFiles[type] || [];
}

/**
 * Fallback: generovanie zvuku cez Web Audio API
 */
function playFallbackSound(type: SoundType, volume: number) {
    if (typeof window === 'undefined') return;

    const AudioCtx: typeof AudioContext | undefined =
        window.AudioContext || (window as any).webkitAudioContext;

    if (!AudioCtx) return;

    const audioContext = new AudioCtx();

    if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
    }

    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const masterGain = audioContext.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(masterGain);
    masterGain.connect(audioContext.destination);

    const soundParams: Record<
        SoundType,
        { freq1: number; freq2: number; duration: number }
    > = {
        click: { freq1: 500, freq2: 600, duration: 0.08 },
        stone: { freq1: 800, freq2: 900, duration: 0.1 },
        wood: { freq1: 350, freq2: 400, duration: 0.12 },
        plop: { freq1: 550, freq2: 650, duration: 0.06 },
        pop: { freq1: 1000, freq2: 1200, duration: 0.05 },
    };

    const params = soundParams[type];

    oscillator1.type = 'square';
    oscillator2.type = 'square';
    oscillator1.frequency.setValueAtTime(
        params.freq1,
        audioContext.currentTime,
    );
    oscillator2.frequency.setValueAtTime(
        params.freq2,
        audioContext.currentTime,
    );

    const now = audioContext.currentTime;
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.005);
    masterGain.gain.exponentialRampToValueAtTime(volume * 0.2, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + params.duration);

    oscillator1.start(now);
    oscillator2.start(now);
    oscillator1.stop(now + params.duration);
    oscillator2.stop(now + params.duration);

    oscillator1.onended = () => {
        audioContext.close().catch(() => {});
    };
}
