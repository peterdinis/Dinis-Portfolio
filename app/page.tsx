'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import MinecraftLoading from '../components/minecraft/MinecraftLoading';

const SimpleLoading = () => (
    <div className='h-50 animate-pulse bg-gray-800/50 rounded-lg' />
);

const Hero = dynamic(() => import('../components/home/Hero'), {
    ssr: false,
    loading: () => <SimpleLoading />,
});

const Achivments = dynamic(() => import('../components/home/Achivments'), {
    ssr: false,
    loading: () => (
        <div className='h-25 animate-pulse bg-gray-800/50 rounded' />
    ),
});

const About = dynamic(() => import('../components/home/About'), {
    ssr: false,
    loading: () => (
        <div className='h-75 animate-pulse bg-gray-800/50 rounded' />
    ),
});

const Skills = dynamic(() => import('../components/skills/Skills'), {
    ssr: false,
    loading: () => (
        <div className='h-100 animate-pulse bg-gray-800/50 rounded-lg' />
    ),
});

const ProjectsSection = dynamic(
    () => import('../components/projects/ProjectsSection'),
    {
        ssr: false,
        loading: () => (
            <div className='h-125 animate-pulse bg-gray-800/50 rounded-lg' />
        ),
    },
);

const TimelineWrapper = dynamic(
    () =>
        import('../components/timeline/TimelineWrapper').then((mod) => ({
            default: mod.TimelineWrapper,
        })),
    {
        ssr: false,
        loading: () => (
            <div className='h-75 animate-pulse bg-gray-800/50 rounded-lg' />
        ),
    },
);

const Contact = dynamic(() => import('../components/contacts/Contact'), {
    ssr: false,
    loading: () => (
        <div className='h-50 animate-pulse bg-gray-800/50 rounded-lg' />
    ),
});

export default function Home() {
    return (
        <div
            className='min-h-screen overflow-x-hidden minecraft-background'
            style={{ color: 'var(--mc-light)' }}
        >
            <Navigation />

            <Suspense fallback={<MinecraftLoading />}>
                <div className='space-y-8'>
                    <Hero />
                    <Achivments />
                    <About />
                    <Skills />
                    <ProjectsSection />
                    <TimelineWrapper />
                    <Contact />
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}
