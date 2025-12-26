'use client';

import { motion } from 'framer-motion';

interface AnimatedBlockProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export function AnimatedBlock({
    children,
    delay = 0,
    className = '',
    style,
}: AnimatedBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay,
                type: 'spring',
                stiffness: 100,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

export function FloatingBlock({
    children,
    className = '',
    style,
}: AnimatedBlockProps) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
