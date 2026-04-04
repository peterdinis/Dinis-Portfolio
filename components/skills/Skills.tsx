'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';

const skills = [
    {
        name: 'Frontend Development',
        icon: '⚛️',
        color: 'var(--mc-sky)',
        description:
            'Html, Css, Scss, Javascript, Typescript, React, Nextjs, TailwindCss, Tanstack Query, Less, Chakra UI',
    },
    {
        name: 'Backend Development',
        icon: '🟢',
        color: 'var(--mc-grass)',
        description:
            'Node.js, MongoDB, Nestjs, Graphql, Mysql, Postgresql, C# Asp.Net',
    },
    {
        name: 'Cloud & DevOps',
        icon: '☁️',
        color: 'var(--mc-diamond)',
        description: 'AWS, Docker, Linux Azure',
    },
    {
        name: 'Mobile Development',
        icon: '📱',
        color: 'var(--mc-wood)',
        description: 'React Native, Progressive Web Apps',
    },
];

const Skills: FC = () => {
    return (
        <section
            id='skills'
            className='min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16'
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            <div className='max-w-6xl w-full space-y-6 md:space-y-8'>
                <AnimatedBlock>
                    <div
                        className='minecraft-block p-4 md:p-6 text-center'
                        style={{ backgroundColor: 'var(--mc-diamond)' }}
                    >
                        <h2
                            className='pixel-text text-2xl md:text-3xl lg:text-4xl'
                            style={{ color: 'var(--mc-dark)' }}
                        >
                            ⚡ SKILLS & TOOLS
                        </h2>
                    </div>
                </AnimatedBlock>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
                    {skills.map((skill, index) => (
                        <AnimatedBlock key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ scale: 1.03, y: -4 }}
                                className='minecraft-panel flex h-full flex-col p-4 md:p-6 text-center cursor-default'
                                style={{ backgroundColor: skill.color }}
                            >
                                <p
                                    className='text-2xl md:text-3xl mb-2'
                                    aria-hidden
                                >
                                    {skill.icon}
                                </p>
                                <p className='pixel-text text-sm md:text-lg lg:text-xl mb-2'>
                                    {skill.name}
                                </p>
                                <p
                                    className='mt-auto text-left text-[8px] md:text-xs lg:text-sm leading-relaxed opacity-90'
                                    style={{ color: 'var(--mc-dark)' }}
                                >
                                    {skill.description}
                                </p>
                            </motion.div>
                        </AnimatedBlock>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
