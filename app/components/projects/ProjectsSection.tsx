'use client';

import { useMinecraftSound } from '@/app/hooks/useMinecraftSound';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';
import Link from 'next/link';
import { Github } from 'lucide-react';

const projects = [
    {
        title: 'PDF-Tools',
        description: 'Simple app with lot of tools for working with PDFS',
        tech: [
            'Nextjs',
            'Server Actions',
            'Typescript',
            'QPDF',
            'Shadcn UI',
            'Tailwindcss',
        ],
        color: 'var(--mc-grass)',
        demo: 'https://pdf-tools-pvi9.vercel.app/',
        github: 'https://github.com/peterdinis/PDF-Tools',
    },
    {
        title: 'Code editor',
        description:
            'Simple code editor, for html, css, javascript written in React and Typescript',
        tech: ['React', 'Vite', 'Typescript', 'Material UI'],
        color: 'var(--mc-diamond)',
        demo: 'https://react-code-editor-flame.vercel.app/',
        github: 'https://github.com/peterdinis/React-Code-Editor',
    },
    {
        title: 'CV-Vision',
        description: 'Application for analyzing CVs',
        tech: [
            'Nextjs',
            'Typescript',
            'TailwindCss',
            'ShadcnUI',
            'OpenAI API',
            'Server Actions',
        ],
        color: 'var(--mc-gold)',
        demo: 'https://cv-vision-gzur.vercel.app/',
        github: 'https://github.com/peterdinis/CV-Vision',
    },
    {
        title: 'Box-Drop',
        description:
            'Application for uploading photos and other files, with option for sharing files with connected users',
        tech: [
            'Nextjs',
            'Typescript',
            'Shadcn UI',
            'Clerkjs',
            'Tailwindcss',
            'Drizzle ORM',
        ],
        color: 'var(--mc-red)',
        demo: 'https://box-drop-etkd.vercel.app/',
        github: 'https://github.com/peterdinis/Box-Drop',
    },
    {
        title: 'PDF Crafter',
        description: 'Application for building PDFs',
        tech: ['Nextjs', 'Typescript', 'TailwindCss', 'ShadcnUI'],
        color: 'var(--mc-blue)',
        demo: 'https://pdf-crafter.vercel.app/',
        github: 'https://github.com/peterdinis/PDF-Crafter',
    },
    {
        title: 'Req Jet',
        description: 'Simple Post-man clone',
        tech: ['Nextjs', 'Typescript', 'Tailwindcss', 'ShadcnUI', 'Supabase'],
        color: 'var(--mc-purple)',
        demo: 'https://req-jet.vercel.app/',
        github: 'https://github.com/peterdinis/Req-Jet',
    },
    {
        title: 'Lexicon',
        description: 'Application for taking notes',
        tech: [
            'Nextjs',
            'Typescript',
            'Tailwindcss',
            'Server Actions',
            'Shadcn UI',
        ],
        color: 'var(--mc-orange)',
        demo: 'https://lexicon-steel.vercel.app/',
        github: 'https://github.com/peterdinis/Lexicon',
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
                                {/* Header */}
                                <div
                                    className='p-3 md:p-4 text-center minecraft-block'
                                    style={{
                                        backgroundColor: project.color,
                                        borderBottom:
                                            '4px solid rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <h3
                                        className='pixel-text text-xl md:text-2xl font-bold mb-0 tracking-wide'
                                        style={{
                                            color: 'var(--mc-dark)',
                                            textShadow:
                                                '2px 2px 0px rgba(255,255,255,0.3)',
                                            letterSpacing: '0.05em',
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p
                                    className='text-[10px] md:text-xs lg:text-sm leading-relaxed'
                                    style={{ color: 'var(--mc-light)' }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech stack */}
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

                                {/* Demo button */}
                                <motion.button
                                    onClick={() => {
                                        playSound('wood', 0.35);
                                        window.open(project.demo, '_blank');
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='minecraft-button w-full py-2 text-xs md:text-sm font-bold mt-4'
                                    style={{
                                        backgroundColor: 'var(--mc-gold)',
                                        color: 'var(--mc-dark)',
                                    }}
                                >
                                    🚀 VIEW PROJECT
                                </motion.button>

                                {/* GitHub button */}
                                <Link
                                    href={project.github}
                                    target='_blank'
                                    className='minecraft-button w-full py-2 text-xs md:text-sm font-bold mt-2 flex items-center justify-center gap-2'
                                    style={{
                                        backgroundColor: 'var(--mc-diamond)',
                                        color: 'var(--mc-dark)',
                                    }}
                                >
                                    <Github size={16} />
                                    CODE
                                </Link>
                            </motion.div>
                        </AnimatedBlock>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
