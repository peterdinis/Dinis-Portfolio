'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from './components/AnimatedBlock';
import MinecraftLoading from './components/MinecraftLoading';
import Navigation from './components/shared/Navigation';
import Hero from './components/home/Hero';
import Achivments from './components/home/Achivments';
import About from './components/home/About';
import Footer from './components/shared/Footer';
import Skills from './components/skills/Skills';
import ProjectsSection from './components/projects/ProjectsSection';
import Contact from './components/contacts/Contact';

export default function Home() {
    return (
        <Suspense fallback={<MinecraftLoading />}>
            <div
                className='min-h-screen overflow-x-hidden minecraft-background'
                style={{ color: 'var(--mc-light)' }}
            >
                <Navigation />

                <Hero />

                <Achivments />

                <About />

                <Skills />

                <ProjectsSection />

                <Contact />

                <Footer />
            </div>
        </Suspense>
    );
}
