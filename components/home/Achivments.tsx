'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';

const achievements = [
    { label: 'BLOCKS PLACED', value: '10K+', color: 'var(--mc-grass)' },
    { label: 'PROJECTS BUILT', value: '81', color: 'var(--mc-diamond)' },
    { label: 'LINES OF CODE', value: '100K+', color: 'var(--mc-gold)' },
];

const Achivments: FC = () => {
    return (
        <section
            className='py-8 md:py-16'
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            <div className='max-w-6xl mx-auto px-4 md:px-8'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {achievements.map((achievement, index) => (
                        <AnimatedBlock key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ scale: 1.1, y: -5 }}
                                className='minecraft-block p-4 md:p-6 text-center'
                                style={{ backgroundColor: achievement.color }}
                            >
                                <p
                                    className='pixel-text text-2xl md:text-3xl font-bold mb-2'
                                    style={{ color: 'var(--mc-dark)' }}
                                >
                                    {achievement.value}
                                </p>
                                <p
                                    className='text-xs md:text-sm'
                                    style={{ color: 'var(--mc-dark)' }}
                                >
                                    {achievement.label}
                                </p>
                            </motion.div>
                        </AnimatedBlock>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achivments;
