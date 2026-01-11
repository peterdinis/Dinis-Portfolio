'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import MinecraftLoading from '@/components/minecraft/MinecraftLoading';

const Hero = dynamic(() => import('../components/home/Hero'), { ssr: false });
const Achivments = dynamic(() => import('../components/home/Achivments'), {
    ssr: false,
});
const About = dynamic(() => import('../components/home/About'), { ssr: false });
const Skills = dynamic(() => import('../components/skills/Skills'), {
    ssr: false,
});
const ProjectsSection = dynamic(
    () => import('../components/projects/ProjectsSection'),
    { ssr: false },
);
const TimelineWrapper = dynamic(
    () =>
        import('../components/timeline/TimelineWrapper').then((mod) => ({
            default: mod.TimelineWrapper,
        })),
    { ssr: false },
);
const Contact = dynamic(() => import('../components/contacts/Contact'), {
    ssr: false,
});

const SequentialLoading = () => (
    <div className='space-y-8 animate-fadeIn'>
        <div className='space-y-8'>
            <MinecraftLoading />
            <MinecraftLoading />
            <MinecraftLoading />
            <MinecraftLoading />
            <MinecraftLoading />
        </div>
    </div>
);

export default function Home() {
    return (
        <div
            className='min-h-screen overflow-x-hidden minecraft-background'
            style={{ color: 'var(--mc-light)' }}
        >
            <Navigation />

            <Suspense fallback={<SequentialLoading />}>
                <div className='space-y-8'>
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
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}
