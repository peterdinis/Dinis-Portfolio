'use client';

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMinecraftSound } from '@/hooks/useMinecraftSound';

const sections = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT', icon: '👤' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'projects', label: 'PROJECTS', icon: '📦' },
    { id: 'contact', label: 'CONTACT', icon: '📧' },
];

const Navigation: FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { playSound } = useMinecraftSound();

    useEffect(() => {
        const handleScroll = () => {
            let current = 'home';
            sections.forEach((section) => {
                const elem = document.getElementById(section.id);
                if (elem && window.scrollY >= elem.offsetTop - 100) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='sticky top-0 z-50 border-b-4 border-mc-border minecraft-block border-x-0 border-t-0 rounded-none bg-mc-deepslate/93 px-2 py-2.5 md:py-3 backdrop-blur-md'
            aria-label='Main navigation'
        >
            <div className='container mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 md:gap-3'>
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        type='button'
                        onClick={() => {
                            playSound('click', 0.3);
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`minecraft-button min-h-[44px] px-3 md:px-4 py-2 text-[10px] md:text-xs font-bold transition-colors duration-200
              ${
                  activeSection === section.id
                      ? 'bg-mc-grass text-black ring-2 ring-inset ring-black/25 shadow-[inset_0_-3px_0_rgba(0,0,0,0.2)]'
                      : 'bg-mc-stone text-mc-light hover:bg-mc-wood hover:text-mc-light'
              }
            `}
                    >
                        <span className='mr-1.5 opacity-90' aria-hidden>
                            {section.icon}
                        </span>
                        {section.label}
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navigation;
