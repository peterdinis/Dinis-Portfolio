'use client';

import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { AnimatedBlock, FloatingBlock } from '../minecraft/AnimatedBlock';
import MinecraftScene from '../minecraft/MinecraftScene';
import { useMinecraftSound } from '@/hooks/useMinecraftSound';

const Hero: FC = () => {
    const { playSound } = useMinecraftSound();

    return (
        <section
            id='home'
            className='relative min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 overflow-hidden'
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            {/* 3D Scene Background */}
            <div className='absolute inset-0 w-full h-full opacity-20 md:opacity-30 pointer-events-none'>
                <Canvas
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                    camera={{ position: [0, 2, 8], fov: 50 }}
                >
                    <Suspense
                        fallback={
                            <div className='w-full h-full flex items-center justify-center'>
                                <div
                                    className='minecraft-block p-4'
                                    style={{
                                        backgroundColor: 'var(--mc-dirt)',
                                    }}
                                >
                                    <p
                                        className='text-xs'
                                        style={{ color: 'var(--mc-light)' }}
                                    >
                                        LOADING 3D...
                                    </p>
                                </div>
                            </div>
                        }
                    >
                        <OrbitControls
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={0.5}
                        />
                        <MinecraftScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className='relative z-10 text-center space-y-6 md:space-y-8 max-w-4xl w-full'>
                <AnimatedBlock delay={0.2}>
                    <FloatingBlock>
                        <div
                            className='minecraft-panel p-6 md:p-8 inline-block max-w-[min(100%,36rem)]'
                            style={{ backgroundColor: 'var(--mc-grass)' }}
                        >
                            <p
                                className='mb-2 text-[10px] md:text-xs uppercase tracking-widest opacity-80'
                                style={{ color: 'var(--mc-dark)' }}
                            >
                                Portfolio spawn point
                            </p>
                            <h1
                                className='pixel-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl'
                                style={{ color: 'var(--mc-dark)' }}
                            >
                                PETER DINIS
                            </h1>
                        </div>
                    </FloatingBlock>
                </AnimatedBlock>

                <AnimatedBlock delay={0.4}>
                    <div
                        className='minecraft-block p-4 md:p-6 mx-auto max-w-2xl'
                        style={{ backgroundColor: 'var(--mc-dirt)' }}
                    >
                        <p
                            className='text-base md:text-lg lg:text-xl font-bold tracking-wide'
                            style={{ color: 'var(--mc-light)' }}
                        >
                            🎮 Full stack developer & creator 🎮
                        </p>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock delay={0.6}>
                    <div
                        className='minecraft-block p-3 md:p-5 mx-auto max-w-xl'
                        style={{ backgroundColor: 'var(--mc-stone)' }}
                    >
                        <p className='mc-body text-center text-xs md:text-sm lg:text-base'>
                            Building blocks of code — React, Next.js, and
                            polished UI, one release at a time.
                        </p>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock delay={0.8}>
                    <div className='flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8'>
                        <motion.button
                            onClick={() => {
                                playSound('stone', 0.4);
                                document
                                    .getElementById('projects')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className='minecraft-button px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold'
                            style={{
                                backgroundColor: 'var(--mc-diamond)',
                                color: 'var(--mc-dark)',
                            }}
                        >
                            📦 VIEW PROJECTS
                        </motion.button>
                        <motion.button
                            onClick={() => {
                                playSound('stone', 0.4);
                                document
                                    .getElementById('contact')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className='minecraft-button px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold'
                            style={{
                                backgroundColor: 'var(--mc-gold)',
                                color: 'var(--mc-dark)',
                            }}
                        >
                            📧 GET IN TOUCH
                        </motion.button>
                    </div>
                </AnimatedBlock>
            </div>
        </section>
    );
};

export default Hero;
