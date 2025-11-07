"use client"

import { useMinecraftSound } from "@/app/hooks/useMinecraftSound";
import { FC, Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MinecraftScene from "../MinecraftScene";
import { AnimatedBlock, FloatingBlock } from "../AnimatedBlock";
import {motion} from "framer-motion"

const Hero: FC = () => {
    const { playSound } = useMinecraftSound();
    
    return (
        <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 overflow-hidden" style={{ backgroundColor: 'var(--mc-dark)' }}>
        {/* 3D Scene Background */}
        <div className="absolute inset-0 w-full h-full opacity-20 md:opacity-30 pointer-events-none">
          <Canvas
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
            camera={{ position: [0, 2, 8], fov: 50 }}
          >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="minecraft-block p-4" style={{ backgroundColor: 'var(--mc-dirt)' }}><p className="text-xs" style={{ color: 'var(--mc-light)' }}>LOADING 3D...</p></div></div>}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <MinecraftScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-4xl w-full">
          <AnimatedBlock delay={0.2}>
            <FloatingBlock>
              <div className="minecraft-block p-6 md:p-8 inline-block" style={{ backgroundColor: 'var(--mc-grass)' }}>
                <h1 className="pixel-text text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4" style={{ color: 'var(--mc-dark)' }}>
                  PETER DINIS
                </h1>
              </div>
            </FloatingBlock>
          </AnimatedBlock>

          <AnimatedBlock delay={0.4}>
            <div className="minecraft-block p-4 md:p-6" style={{ backgroundColor: 'var(--mc-dirt)' }}>
              <p className="pixel-text text-lg md:text-xl lg:text-2xl" style={{ color: 'var(--mc-light)' }}>
                🎮 DEVELOPER & CREATOR 🎮
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.6}>
            <div className="minecraft-block p-3 md:p-4" style={{ backgroundColor: 'var(--mc-stone)' }}>
              <p className="text-xs md:text-sm lg:text-base" style={{ color: 'var(--mc-light)' }}>
                BUILDING BLOCKS OF CODE, ONE PIXEL AT A TIME
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.8}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <motion.button
                onClick={() => {
                  playSound('stone', 0.4);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="minecraft-button px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold"
                style={{ backgroundColor: 'var(--mc-diamond)', color: 'var(--mc-dark)' }}
              >
                📦 VIEW PROJECTS
              </motion.button>
              <motion.button
                onClick={() => {
                  playSound('stone', 0.4);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="minecraft-button px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold"
                style={{ backgroundColor: 'var(--mc-gold)', color: 'var(--mc-dark)' }}
              >
                📧 GET IN TOUCH
              </motion.button>
            </div>
          </AnimatedBlock>
        </div>
      </section>
    )
}

export default Hero