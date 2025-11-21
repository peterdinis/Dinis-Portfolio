'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import MinecraftLoading from './components/minecraft/MinecraftLoading';
import { TimelineWrapper } from './components/timeline/TimelineWrapper';

const Hero = dynamic(() => import('./components/home/Hero'), {
    ssr: false,
    loading: () => <MinecraftLoading />,
});

const Achivments = dynamic(() => import('./components/home/Achivments'), {
    ssr: false,
    loading: () => <MinecraftLoading />,
});

const About = dynamic(() => import('./components/home/About'), {
    ssr: false,
    loading: () => <MinecraftLoading />,
});

const Skills = dynamic(() => import('./components/skills/Skills'), {
    ssr: false,
    loading: () => <MinecraftLoading />,
});

const ProjectsSection = dynamic(
    () => import('./components/projects/ProjectsSection'),
    {
        ssr: false,
        loading: () => <MinecraftLoading />,
    },
);

const Contact = dynamic(() => import('./components/contacts/Contact'), {
    ssr: false,
    loading: () => <MinecraftLoading />,
});

export default function Home() {
    return (
        <div
            className='min-h-screen overflow-x-hidden minecraft-background'
            style={{ color: 'var(--mc-light)' }}
        >
            <Navigation />

            <Suspense fallback={<MinecraftLoading />}>
                <Hero />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <Achivments />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <About />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <Skills />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <ProjectsSection />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <TimelineWrapper />
            </Suspense>

            <Suspense fallback={<MinecraftLoading />}>
                <Contact />
            </Suspense>

            <Footer />
        </div>
    );
}
