'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import MinecraftScene from './components/MinecraftScene';
import { AnimatedBlock, FloatingBlock } from './components/AnimatedBlock';
import ScrollToTop from './components/ScrollToTop';
import MinecraftLoading from './components/MinecraftLoading';
import { useMinecraftSound } from './hooks/useMinecraftSound';
import Navigation from './components/shared/Navigation';
import Hero from './components/home/Hero';

export default function Home() {
  const { playSound } = useMinecraftSound();

  const skills = [
    { name: 'REACT', color: 'var(--mc-sky)', icon: '⚛️' },
    { name: 'NEXT.JS', color: 'var(--mc-diamond)', icon: '▲' },
    { name: 'TYPESCRIPT', color: 'var(--mc-water)', icon: '📘' },
    { name: 'NODE.JS', color: 'var(--mc-grass)', icon: '🟢' },
    { name: 'PYTHON', color: 'var(--mc-gold)', icon: '🐍' },
    { name: 'TAILWIND', color: 'var(--mc-wood)', icon: '🎨' },
    { name: 'THREE.JS', color: 'var(--mc-lava)', icon: '🎮' },
    { name: 'WEBGL', color: 'var(--mc-diamond)', icon: '✨' },
    { name: 'GIT', color: 'var(--mc-stone)', icon: '🔀' },
  ];

  const projects = [
    {
      title: 'MINECRAFT PORTFOLIO',
      description: 'A MINECRAFT-STYLED WEB APPLICATION WITH 3D ANIMATIONS, BLOCKY DESIGN AND PIXELATED UI ELEMENTS. BUILT WITH NEXT.JS AND THREE.JS.',
      tech: ['REACT', 'NEXT.JS', 'THREE.JS', 'TAILWIND'],
      color: 'var(--mc-grass)',
      stats: { blocks: '1000+', fps: '60', visitors: '10K+' },
    },
    {
      title: '3D BLOCK GAME',
      description: 'AN INTERACTIVE 3D GAME BUILT WITH MINECRAFT AESTHETICS, BLOCKY ANIMATIONS AND PHYSICS. FEATURES REAL-TIME RENDERING AND SMOOTH CONTROLS.',
      tech: ['THREE.JS', 'REACT', 'WEBGL', 'TYPESCRIPT'],
      color: 'var(--mc-diamond)',
      stats: { blocks: '5000+', fps: '60', players: '1K+' },
    },
    {
      title: 'BLOCKY UI LIBRARY',
      description: 'A GAME-INSPIRED UI COMPONENT LIBRARY WITH PIXELATED STYLING, BLOCKY BUTTONS AND MINECRAFT-THEMED COMPONENTS. FULLY RESPONSIVE AND ANIMATED.',
      tech: ['REACT', 'TYPESCRIPT', 'CSS', 'FRAMER-MOTION'],
      color: 'var(--mc-gold)',
      stats: { components: '50+', downloads: '5K+', stars: '200+' },
    },
  ];

  const achievements = [
    { label: 'BLOCKS PLACED', value: '10K+', color: 'var(--mc-grass)' },
    { label: 'PROJECTS BUILT', value: '50+', color: 'var(--mc-diamond)' },
    { label: 'LINES OF CODE', value: '100K+', color: 'var(--mc-gold)' },
  ];

  const minecraftFacts = [
    'MINECRAFT WAS RELEASED IN 2011 AND HAS SOLD OVER 300 MILLION COPIES',
    'THE GAME USES JAVA AND C++ FOR DIFFERENT PLATFORMS',
    'MINECRAFT WORLDS ARE INFINITE (THEORETICALLY)',
    'THERE ARE OVER 800 DIFFERENT BLOCKS IN MINECRAFT',
    'THE GAME HAS BEEN USED FOR EDUCATION IN SCHOOLS WORLDWIDE',
  ];

  return (
    <Suspense fallback={<MinecraftLoading />}>
      <div className="min-h-screen overflow-x-hidden minecraft-background" style={{ color: 'var(--mc-light)' }}>
     <Navigation />
     
      <Hero />

      {/* Achievements Section */}
      <section className="py-8 md:py-16" style={{ backgroundColor: 'var(--mc-dark)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <AnimatedBlock key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="minecraft-block p-4 md:p-6 text-center"
                  style={{ backgroundColor: achievement.color }}
                >
                  <p className="pixel-text text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--mc-dark)' }}>
                    {achievement.value}
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: 'var(--mc-dark)' }}>
                    {achievement.label}
                  </p>
                </motion.div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16" style={{ backgroundColor: 'var(--mc-dark)' }}>
        <div className="max-w-4xl w-full space-y-6 md:space-y-8">
          <AnimatedBlock>
            <div className="minecraft-block p-4 md:p-6 text-center" style={{ backgroundColor: 'var(--mc-wood)' }}>
              <h2 className="pixel-text text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6" style={{ color: 'var(--mc-light)' }}>
                👤 ABOUT ME
              </h2>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <div className="minecraft-block p-6 md:p-8" style={{ backgroundColor: 'var(--mc-dirt)' }}>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-4" style={{ color: 'var(--mc-light)' }}>
                🎮 WELCOME TO MY BLOCKY WORLD! I'M A PASSIONATE DEVELOPER WHO LOVES CREATING
                UNIQUE AND ENGAGING WEB EXPERIENCES. INSPIRED BY MINECRAFT'S ICONIC AESTHETIC,
                I BUILD APPLICATIONS THAT COMBINE FUNCTIONALITY WITH PLAYFUL DESIGN.
              </p>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-4" style={{ color: 'var(--mc-light)' }}>
                ⚡ WHEN I'M NOT CRAFTING CODE, YOU'LL FIND ME EXPLORING NEW TECHNOLOGIES,
                BUILDING CREATIVE PROJECTS, AND TURNING IDEAS INTO REALITY, ONE BLOCK AT A TIME.
              </p>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed" style={{ color: 'var(--mc-light)' }}>
                🚀 LET'S BUILD SOMETHING AMAZING TOGETHER!
              </p>
            </div>
          </AnimatedBlock>

          {/* Minecraft Facts */}
          <AnimatedBlock delay={0.4}>
            <div className="minecraft-block p-4 md:p-6" style={{ backgroundColor: 'var(--mc-stone)' }}>
              <h3 className="pixel-text text-lg md:text-xl mb-4" style={{ color: 'var(--mc-light)' }}>
                🧱 MINECRAFT FACTS
              </h3>
              <div className="space-y-2">
                {minecraftFacts.map((fact, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-[10px] md:text-xs lg:text-sm" style={{ color: 'var(--mc-light)' }}
                  >
                    • {fact}
                  </motion.p>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16" style={{ backgroundColor: 'var(--mc-dark)' }}>
        <div className="max-w-6xl w-full space-y-6 md:space-y-8">
          <AnimatedBlock>
            <div className="minecraft-block p-4 md:p-6 text-center" style={{ backgroundColor: 'var(--mc-grass)' }}>
              <h2 className="pixel-text text-2xl md:text-3xl lg:text-4xl" style={{ color: 'var(--mc-dark)' }}>
                ⚡ SKILLS & TOOLS
              </h2>
            </div>
          </AnimatedBlock>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <AnimatedBlock key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  className="minecraft-block p-4 md:p-6 text-center cursor-pointer"
                  style={{ backgroundColor: skill.color }}
                >
                  <p className="text-2xl md:text-3xl mb-2">{skill.icon}</p>
                  <p className="pixel-text text-sm md:text-lg lg:text-xl font-bold" style={{ color: 'var(--mc-dark)' }}>
                    {skill.name}
                  </p>
                </motion.div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16" style={{ backgroundColor: 'var(--mc-dark)' }}>
        <div className="max-w-6xl w-full space-y-6 md:space-y-8">
          <AnimatedBlock>
            <div className="minecraft-block p-4 md:p-6 text-center" style={{ backgroundColor: 'var(--mc-diamond)' }}>
              <h2 className="pixel-text text-2xl md:text-3xl lg:text-4xl" style={{ color: 'var(--mc-dark)' }}>
                📦 PROJECTS
              </h2>
            </div>
          </AnimatedBlock>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <AnimatedBlock key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="minecraft-block p-4 md:p-6 space-y-3 md:space-y-4 h-full"
                  style={{ backgroundColor: 'var(--mc-stone)' }}
                >
                  <div className="p-3 md:p-4 text-center" style={{ backgroundColor: project.color }}>
                    <h3 className="pixel-text text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--mc-dark)' }}>
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[10px] md:text-xs lg:text-sm leading-relaxed" style={{ color: 'var(--mc-light)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="minecraft-block px-2 md:px-3 py-1 text-[8px] md:text-xs"
                        style={{ backgroundColor: 'var(--mc-wood)', color: 'var(--mc-light)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2" style={{ backgroundColor: 'var(--mc-dirt)' }}>
                        <p className="text-xs md:text-sm font-bold" style={{ color: 'var(--mc-light)' }}>{value}</p>
                        <p className="text-[8px] md:text-xs" style={{ color: 'var(--mc-light)' }}>{key.toUpperCase()}</p>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => playSound('wood', 0.35)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="minecraft-button w-full py-2 text-xs md:text-sm font-bold mt-3 md:mt-4"
                    style={{ backgroundColor: 'var(--mc-gold)', color: 'var(--mc-dark)' }}
                  >
                    🚀 VIEW PROJECT
                  </motion.button>
                </motion.div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:p-8 py-12 md:py-16" style={{ backgroundColor: 'var(--mc-dark)' }}>
        <div className="max-w-4xl w-full space-y-6 md:space-y-8">
          <AnimatedBlock>
            <div className="minecraft-block p-4 md:p-6 text-center" style={{ backgroundColor: 'var(--mc-lava)' }}>
              <h2 className="pixel-text text-2xl md:text-3xl lg:text-4xl" style={{ color: 'var(--mc-light)' }}>
                📧 GET IN TOUCH
              </h2>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <div className="minecraft-block p-6 md:p-8 space-y-4 md:space-y-6" style={{ backgroundColor: 'var(--mc-dirt)' }}>
              <p className="text-xs md:text-sm lg:text-base text-center" style={{ color: 'var(--mc-light)' }}>
                🎮 READY TO START A NEW PROJECT? LET'S CONNECT!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: 'EMAIL ME', icon: '📧', color: 'var(--mc-sky)' },
                  { label: 'LINKEDIN', icon: '💼', color: 'var(--mc-grass)' },
                  { label: 'GITHUB', icon: '🐙', color: 'var(--mc-diamond)' },
                  { label: 'TWITTER', icon: '🐦', color: 'var(--mc-gold)' },
                ].map((contact, index) => (
                  <motion.button
                    key={index}
                    onClick={() => playSound('plop', 0.35)}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="minecraft-button py-3 md:py-4 text-xs md:text-sm font-bold"
                    style={{ backgroundColor: contact.color, color: 'var(--mc-dark)' }}
                  >
                    {contact.icon} {contact.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="minecraft-block p-4 md:p-6 text-center"
        style={{ backgroundColor: 'var(--mc-wood)' }}
      >
        <p className="text-[10px] md:text-xs" style={{ color: 'var(--mc-light)' }}>
          © 2025 PETER DINIS | BUILT WITH MINECRAFT STYLE & THREE.JS 🎮
        </p>
      </motion.footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </Suspense>
  );
}
