'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='minecraft-block p-4 md:p-6 text-center'
            style={{ backgroundColor: 'var(--mc-wood)' }}
        >
            <p
                className='text-xl'
                style={{ color: 'var(--mc-light)' }}
            >
                © 2025 PETER DINIS 🎮
            </p>
        </motion.footer>
    );
};

export default Footer;
