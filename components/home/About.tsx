'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';

const minecraftFacts = [
    'MINECRAFT WAS RELEASED IN 2011 AND HAS SOLD OVER 300 MILLION COPIES',
    'THE GAME USES JAVA AND C++ FOR DIFFERENT PLATFORMS',
    'MINECRAFT WORLDS ARE INFINITE (THEORETICALLY)',
    'THERE ARE OVER 800 DIFFERENT BLOCKS IN MINECRAFT',
    'THE GAME HAS BEEN USED FOR EDUCATION IN SCHOOLS WORLDWIDE',
];

const About: FC = () => {
    return (
        <section
            id='about'
            className='min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16'
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            <div className='max-w-4xl w-full space-y-6 md:space-y-8'>
                <AnimatedBlock>
                    <div
                        className='minecraft-block p-4 md:p-6 text-center'
                        style={{ backgroundColor: 'var(--mc-wood)' }}
                    >
                        <h2
                            className='pixel-text text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6'
                            style={{ color: 'var(--mc-light)' }}
                        >
                            👤 ABOUT ME
                        </h2>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock delay={0.2}>
                    <div
                        className='minecraft-block p-6 md:p-8'
                        style={{ backgroundColor: 'var(--mc-dirt)' }}
                    >
                        <p className='mc-body text-xs md:text-sm lg:text-base mb-4'>
                            Welcome to my blocky corner of the web. I&apos;m a
                            developer who enjoys sharp UX and solid engineering —
                            inspired by Minecraft&apos;s playful look, without
                            sacrificing clarity or performance.
                        </p>
                        <p className='mc-body text-xs md:text-sm lg:text-base mb-4'>
                            When I&apos;m not shipping features, I&apos;m
                            exploring new tools, side projects, and ways to make
                            interfaces feel intentional.
                        </p>
                        <p className='mc-body text-xs md:text-sm lg:text-base'>
                            Let&apos;s build something worth spawning in.
                        </p>
                    </div>
                </AnimatedBlock>

                {/* Minecraft Facts */}
                <AnimatedBlock delay={0.4}>
                    <div
                        className='minecraft-block p-4 md:p-6'
                        style={{ backgroundColor: 'var(--mc-stone)' }}
                    >
                        <h3
                            className='pixel-text text-lg md:text-xl mb-4'
                            style={{ color: 'var(--mc-light)' }}
                        >
                            🧱 MINECRAFT FACTS
                        </h3>
                        <div className='space-y-2.5'>
                            {minecraftFacts.map((fact, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className='mc-body pl-3 text-[10px] md:text-xs lg:text-sm border-l-2 border-mc-grass/70'
                                >
                                    {fact}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </AnimatedBlock>
            </div>
        </section>
    );
};

export default About;
