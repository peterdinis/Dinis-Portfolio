'use client';

import { motion } from 'framer-motion';

export default function MinecraftLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'var(--mc-dark)' }}>
      <div className="text-center space-y-8">
        {/* Minecraft Character Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Minecraft Steve Head */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="minecraft-block mb-2"
            style={{
              backgroundColor: '#8B6F47',
              width: '80px',
              height: '80px',
              position: 'relative',
            }}
          >
            {/* Face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                {/* Eyes */}
                <div className="flex gap-3">
                  <div
                    className="minecraft-block"
                    style={{
                      backgroundColor: '#000000',
                      width: '12px',
                      height: '12px',
                    }}
                  />
                  <div
                    className="minecraft-block"
                    style={{
                      backgroundColor: '#000000',
                      width: '12px',
                      height: '12px',
                    }}
                  />
                </div>
                {/* Mouth */}
                <div
                  className="minecraft-block"
                  style={{
                    backgroundColor: '#000000',
                    width: '20px',
                    height: '8px',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            className="minecraft-block relative"
            style={{
              backgroundColor: '#3F51B5',
              width: '80px',
              height: '100px',
            }}
          >
            {/* Arms */}
            <div className="absolute -left-6 top-2">
              <motion.div
                animate={{
                  rotate: [0, 25, 0, -25, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="minecraft-block"
                style={{
                  backgroundColor: '#5C6BC0',
                  width: '20px',
                  height: '60px',
                  transformOrigin: 'top center',
                }}
              />
            </div>
            <div className="absolute -right-6 top-2">
              <motion.div
                animate={{
                  rotate: [0, -25, 0, 25, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="minecraft-block"
                style={{
                  backgroundColor: '#5C6BC0',
                  width: '20px',
                  height: '60px',
                  transformOrigin: 'top center',
                }}
              />
            </div>
          </motion.div>

          {/* Legs */}
          <div className="flex gap-2 mt-2">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
              className="minecraft-block"
              style={{
                backgroundColor: '#1A237E',
                width: '30px',
                height: '50px',
              }}
            />
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
              className="minecraft-block"
              style={{
                backgroundColor: '#1A237E',
                width: '30px',
                height: '50px',
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <motion.h2
            className="pixel-text text-2xl md:text-3xl"
            style={{ color: 'var(--mc-light)' }}
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            LOADING...
          </motion.h2>

          {/* Loading Blocks */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: 'easeInOut',
                }}
                className="minecraft-block"
                style={{
                  backgroundColor: ['#7CB342', '#8B6F47', '#9E9E9E', '#00BCD4', '#FFC107'][index],
                  width: '24px',
                  height: '24px',
                }}
              />
            ))}
          </div>

          {/* Loading Bar */}
          <div className="w-64 md:w-80 mx-auto">
            <div
              className="minecraft-block h-4"
              style={{
                backgroundColor: 'var(--mc-dirt)',
                border: '2px solid var(--mc-border)',
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full"
                style={{
                  backgroundColor: 'var(--mc-grass)',
                }}
              />
            </div>
          </div>

          {/* Loading Text with dots */}
          <motion.p
            className="text-sm md:text-base"
            style={{ color: 'var(--mc-light)' }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            BUILDING BLOCKS
            <motion.span
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              ...
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

