import { useMinecraftSound } from '@/app/hooks/useMinecraftSound';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';

const projects = [
    {
        title: 'MINECRAFT PORTFOLIO',
        description:
            'A MINECRAFT-STYLED WEB APPLICATION WITH 3D ANIMATIONS, BLOCKY DESIGN AND PIXELATED UI ELEMENTS. BUILT WITH NEXT.JS AND THREE.JS.',
        tech: ['REACT', 'NEXT.JS', 'THREE.JS', 'TAILWIND'],
        color: 'var(--mc-grass)',
        stats: { blocks: '1000+', fps: '60', visitors: '10K+' },
    },
    {
        title: '3D BLOCK GAME',
        description:
            'AN INTERACTIVE 3D GAME BUILT WITH MINECRAFT AESTHETICS, BLOCKY ANIMATIONS AND PHYSICS. FEATURES REAL-TIME RENDERING AND SMOOTH CONTROLS.',
        tech: ['THREE.JS', 'REACT', 'WEBGL', 'TYPESCRIPT'],
        color: 'var(--mc-diamond)',
        stats: { blocks: '5000+', fps: '60', players: '1K+' },
    },
    {
        title: 'BLOCKY UI LIBRARY',
        description:
            'A GAME-INSPIRED UI COMPONENT LIBRARY WITH PIXELATED STYLING, BLOCKY BUTTONS AND MINECRAFT-THEMED COMPONENTS. FULLY RESPONSIVE AND ANIMATED.',
        tech: ['REACT', 'TYPESCRIPT', 'CSS', 'FRAMER-MOTION'],
        color: 'var(--mc-gold)',
        stats: { components: '50+', downloads: '5K+', stars: '200+' },
    },
];

const ProjectsSection: FC = () => {
    const { playSound } = useMinecraftSound();

    return (
        <section
            id='projects'
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
                            📦 PROJECTS
                        </h2>
                    </div>
                </AnimatedBlock>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                    {projects.map((project, index) => (
                        <AnimatedBlock key={index} delay={index * 0.2}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10 }}
                                className='minecraft-block p-4 md:p-6 space-y-3 md:space-y-4 h-full'
                                style={{ backgroundColor: 'var(--mc-stone)' }}
                            >
                                <div
                                    className='p-3 md:p-4 text-center'
                                    style={{ backgroundColor: project.color }}
                                >
                                    <h3
                                        className='pixel-text text-lg md:text-xl font-bold mb-2'
                                        style={{ color: 'var(--mc-dark)' }}
                                    >
                                        {project.title}
                                    </h3>
                                </div>
                                <p
                                    className='text-[10px] md:text-xs lg:text-sm leading-relaxed'
                                    style={{ color: 'var(--mc-light)' }}
                                >
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2 mt-3 md:mt-4'>
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            whileHover={{ scale: 1.1 }}
                                            className='minecraft-block px-2 md:px-3 py-1 text-[8px] md:text-xs'
                                            style={{
                                                backgroundColor:
                                                    'var(--mc-wood)',
                                                color: 'var(--mc-light)',
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className='grid grid-cols-3 gap-2 mt-3'>
                                    {Object.entries(project.stats).map(
                                        ([key, value], statIndex) => (
                                            <div
                                                key={statIndex}
                                                className='text-center p-2'
                                                style={{
                                                    backgroundColor:
                                                        'var(--mc-dirt)',
                                                }}
                                            >
                                                <p
                                                    className='text-xs md:text-sm font-bold'
                                                    style={{
                                                        color: 'var(--mc-light)',
                                                    }}
                                                >
                                                    {value}
                                                </p>
                                                <p
                                                    className='text-[8px] md:text-xs'
                                                    style={{
                                                        color: 'var(--mc-light)',
                                                    }}
                                                >
                                                    {key.toUpperCase()}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <motion.button
                                    onClick={() => playSound('wood', 0.35)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='minecraft-button w-full py-2 text-xs md:text-sm font-bold mt-3 md:mt-4'
                                    style={{
                                        backgroundColor: 'var(--mc-gold)',
                                        color: 'var(--mc-dark)',
                                    }}
                                >
                                    🚀 VIEW PROJECT
                                </motion.button>
                            </motion.div>
                        </AnimatedBlock>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
