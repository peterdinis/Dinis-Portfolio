'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='minecraft-block border-x-0 border-b-0 rounded-none p-6 md:p-8 text-center'
            style={{ backgroundColor: 'var(--mc-deepslate)' }}
        >
            <p
                className='pixel-text text-sm md:text-base'
                style={{ color: 'var(--mc-light)' }}
            >
                © 2026 Peter Dinis
            </p>
            <p className='mc-body mt-2 text-[10px] md:text-xs'>
                Crafted with Next.js — thanks for visiting the realm.
            </p>
        </motion.footer>
    );
};

export default Footer;
