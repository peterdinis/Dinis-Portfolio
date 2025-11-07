'use client';

import { FC } from 'react';
import { AnimatedBlock } from '../AnimatedBlock';
import { useMinecraftSound } from '@/app/hooks/useMinecraftSound';
import { motion } from 'framer-motion';

const Contact: FC = () => {
    const { playSound } = useMinecraftSound();

    return (
        <section
            id='contact'
            className='min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16'
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            <div className='max-w-4xl w-full space-y-6 md:space-y-8'>
                <AnimatedBlock>
                    <div
                        className='minecraft-block p-4 md:p-6 text-center'
                        style={{ backgroundColor: 'var(--mc-lava)' }}
                    >
                        <h2
                            className='pixel-text text-2xl md:text-3xl lg:text-4xl'
                            style={{ color: 'var(--mc-light)' }}
                        >
                            📧 GET IN TOUCH
                        </h2>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock delay={0.2}>
                    <div
                        className='minecraft-block p-6 md:p-8 space-y-4 md:space-y-6'
                        style={{ backgroundColor: 'var(--mc-dirt)' }}
                    >
                        <p
                            className='text-xs md:text-sm lg:text-base text-center'
                            style={{ color: 'var(--mc-light)' }}
                        >
                            🎮 READY TO START A NEW PROJECT? LET'S CONNECT!
                        </p>
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4'>
                            {[
                                {
                                    label: 'EMAIL ME',
                                    icon: '📧',
                                    color: 'var(--mc-sky)',
                                },
                                {
                                    label: 'LINKEDIN',
                                    icon: '💼',
                                    color: 'var(--mc-grass)',
                                },
                                {
                                    label: 'GITHUB',
                                    icon: '🐙',
                                    color: 'var(--mc-diamond)',
                                },
                                {
                                    label: 'TWITTER',
                                    icon: '🐦',
                                    color: 'var(--mc-gold)',
                                },
                            ].map((contact, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => playSound('plop', 0.35)}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='minecraft-button py-3 md:py-4 text-xs md:text-sm font-bold'
                                    style={{
                                        backgroundColor: contact.color,
                                        color: 'var(--mc-dark)',
                                    }}
                                >
                                    {contact.icon} {contact.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </AnimatedBlock>
            </div>
        </section>
    );
};

export default Contact;
