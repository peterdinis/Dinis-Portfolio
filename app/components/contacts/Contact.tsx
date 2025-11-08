'use client';

import { FC } from 'react';
import { useMinecraftSound } from '@/app/hooks/useMinecraftSound';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../minecraft/AnimatedBlock';

type ContactLink = {
    label: string;
    icon: string;
    color: string;
    href: string; // type-safe link
};

const encodeEmail = (user: string, domain: string) =>
    `mailto:${user}@${domain}`;

const encodeURL = (url: string) => url; 

const contacts: ContactLink[] = [
    {
        label: 'EMAIL ME',
        icon: '📧',
        color: 'var(--mc-sky)',
        href: encodeEmail('peterdinis611', 'gmail.com'),
    },
    {
        label: 'LINKEDIN',
        icon: '💼',
        color: 'var(--mc-grass)',
        href: encodeURL('https://www.linkedin.com/in/peter-dinis-58520b214/'),
    },
    {
        label: 'GITHUB',
        icon: '🐙',
        color: 'var(--mc-diamond)',
        href: encodeURL('https://github.com/peterdinis'),
    },
    {
        label: 'FACEBOOK',
        icon: '📘',
        color: 'var(--mc-gold)',
        href: encodeURL('https://www.facebook.com/peto.dinis/'),
    },
];

const Contact: FC = () => {
    const { playSound } = useMinecraftSound();

    const handleClick = (href: string) => {
        playSound('plop', 0.35);
        window.open(href, '_blank');
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16"
            style={{ backgroundColor: 'var(--mc-dark)' }}
        >
            <div className="max-w-4xl w-full space-y-6 md:space-y-8">
                <AnimatedBlock>
                    <div
                        className="minecraft-block p-4 md:p-6 text-center"
                        style={{ backgroundColor: 'var(--mc-lava)' }}
                    >
                        <h2
                            className="pixel-text text-2xl md:text-3xl lg:text-4xl"
                            style={{ color: 'var(--mc-light)' }}
                        >
                            📧 GET IN TOUCH
                        </h2>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock delay={0.2}>
                    <div
                        className="minecraft-block p-6 md:p-8 space-y-4 md:space-y-6"
                        style={{ backgroundColor: 'var(--mc-dirt)' }}
                    >
                        <p
                            className="text-xs md:text-sm lg:text-base text-center"
                            style={{ color: 'var(--mc-light)' }}
                        >
                            🎮 READY TO START A NEW PROJECT? LET&apos;S CONNECT!
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                            {contacts.map((contact, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleClick(contact.href)}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="minecraft-button py-3 md:py-4 text-xs md:text-sm font-bold"
                                    style={{
                                        backgroundColor: contact.color,
                                        color: 'var(--mc-dark)',
                                    }}
                                >
                                    {contact.icon} {contact.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </AnimatedBlock>
            </div>
        </section>
    );
};

export default Contact;
