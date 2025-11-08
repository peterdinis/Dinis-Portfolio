'use client';

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMinecraftSound } from '@/app/hooks/useMinecraftSound';

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

    // Aktualizácia aktívnej sekcie podľa scrollu
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
            className='sticky top-0 z-50 minecraft-block p-2 md:p-4'
            style={{ backgroundColor: 'var(--mc-dirt)' }}
        >
            <div className='container mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4'>
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => {
                            playSound('click', 0.3);
                            document
                                .getElementById(section.id)
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`minecraft-button px-2 md:px-4 py-2 text-[10px] md:text-xs transition-colors duration-200
              ${activeSection === section.id ? 'bg-mc-grass text-black' : 'bg-mc-wood text-mc-light hover:bg-mc-stone'}
            `}
                    >
                        <span className='mr-1'>{section.icon}</span>
                        {section.label}
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navigation;
