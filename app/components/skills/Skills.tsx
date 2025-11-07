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
            'Html, Css, Scss, Javascript, Typescript, React, Nextjs, TailwindCss, Tanstack Query',
    },
    {
        name: 'Backend Development',
        icon: '🟢',
        color: 'var(--mc-grass)',
        description: 'Node.js, MongoDB, Nestjs, Graphql, Mysql, Postgresql, C#',
    },
    {
        name: 'Cloud & DevOps',
        icon: '☁️',
        color: 'var(--mc-diamond)',
        description: 'AWS, Docker, Linux',
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
                                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                                className='minecraft-block p-4 md:p-6 text-center cursor-pointer'
                                style={{ backgroundColor: skill.color }}
                            >
                                <p className='text-2xl md:text-3xl mb-2'>
                                    {skill.icon}
                                </p>
                                <p
                                    className='pixel-text text-sm md:text-lg lg:text-xl font-bold'
                                    style={{ color: 'var(--mc-dark)' }}
                                >
                                    {skill.name}
                                </p>
                                <p
                                    className='text-[8px] md:text-xs lg:text-sm leading-relaxed mt-1'
                                    style={{ color: 'var(--mc-light)' }}
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
