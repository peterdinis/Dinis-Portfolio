'use client';

import { useCallback, useRef } from 'react';

type SoundType = 'click' | 'stone' | 'wood' | 'plop' | 'pop';

/**
 * Hook to play actual Minecraft sound effects from audio files
 */
export function useMinecraftSound() {
    // Cache audio elements for better performance
    const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

    const playSound = useCallback(
        (type: SoundType = 'click', volume: number = 0.5) => {
            if (typeof window === 'undefined') {
                return;
            }

            // Try to play from local public/sounds folder first
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

                        // Try first URL
                        audio.src = soundUrls[0];

                        // If loading fails, use fallback
                        audio.addEventListener(
                            'error',
                            () => {
                                console.log(
                                    `Local sound failed for ${type}, using fallback`
                                );
                                playFallbackSound(type, volume);
                            },
                            { once: true }
                        );

                        audioCache.current.set(cacheKey, audio);
                    }

                    // Try to play
                    audio.currentTime = 0;
                    audio.volume = Math.max(0, Math.min(1, volume));

                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // If play fails, use fallback
                            playFallbackSound(type, volume);
                        });
                    }
                } catch (error) {
                    console.error('Error playing local sound:', error);
                    playFallbackSound(type, volume);
                }
            };

            // Try local files first, fallback to generated sound if it fails
            tryPlayFromLocal();
        },
        []
    );

    return { playSound };
}

/**
 * Get multiple URLs for Minecraft sounds with fallbacks
 */
function getMinecraftSoundURLs(type: SoundType): string[] {
    // Map sound types to actual filenames in public/sounds
    const soundFiles: Record<SoundType, string[]> = {
        click: ['/sounds/Voicy_Say2 - spider.mp3'],
        stone: ['/sounds/Voicy_Strong4 - attack.mp3'],
        wood: ['/sounds/Voicy_Shoot1 - crossbow.mp3'],
        plop: ['/sounds/Voicy_Shoot1 - crossbow.mp3'],
        pop: ['/sounds/Voicy_Strong4 - attack.mp3'],
    };

    // Return local files only (from public/sounds directory)
    return soundFiles[type] || [];
}

/**
 * Fallback: Generate Minecraft-like sound using Web Audio API
 * This creates sounds that mimic Minecraft's digital/blocky audio style
 */
function playFallbackSound(type: SoundType, volume: number) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const AudioContext: typeof window.AudioContext | undefined =
    window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContext) {
            return;
        }

        const audioContext = new AudioContext();

        // Resume audio context if suspended (required for user interaction)
        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(() => {
                // If resume fails, try to play anyway
            });
        }

        // Create multiple oscillators for richer sound (like Minecraft)
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const masterGain = audioContext.createGain();

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(masterGain);
        masterGain.connect(audioContext.destination);

        // Sound parameters for different types
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

        const params = soundParams[type] || soundParams.click;

        // Use square wave for digital/Minecraft-like sound
        oscillator1.type = 'square';
        oscillator2.type = 'square';
        oscillator1.frequency.setValueAtTime(
            params.freq1,
            audioContext.currentTime
        );
        oscillator2.frequency.setValueAtTime(
            params.freq2,
            audioContext.currentTime
        );

        // Create envelope with quick attack and decay (like Minecraft)
        const now = audioContext.currentTime;
        masterGain.gain.setValueAtTime(0, now);
        masterGain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.005);
        masterGain.gain.exponentialRampToValueAtTime(volume * 0.2, now + 0.02);
        masterGain.gain.exponentialRampToValueAtTime(
            0.001,
            now + params.duration
        );

        oscillator1.start(now);
        oscillator2.start(now);
        oscillator1.stop(now + params.duration);
        oscillator2.stop(now + params.duration);

        // Clean up
        oscillator1.onended = () => {
            try {
                audioContext.close();
            } catch (e) {
                throw new Error(e instanceof Error ? e.message : String(e));
            }
        };
    } catch (error) {
        console.error('Fallback sound failed:', error);
    }
}
