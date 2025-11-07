'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from './components/AnimatedBlock';
import ScrollToTop from './components/ScrollToTop';
import MinecraftLoading from './components/MinecraftLoading';
import { useMinecraftSound } from './hooks/useMinecraftSound';
import Navigation from './components/shared/Navigation';
import Hero from './components/home/Hero';
import Achivments from './components/home/Achivments';
import About from './components/home/About';

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

  return (
    <Suspense fallback={<MinecraftLoading />}>
      <div className="min-h-screen overflow-x-hidden minecraft-background" style={{ color: 'var(--mc-light)' }}>
     <Navigation />

      <Hero />

      <Achivments />

      <About />

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
    </div>
    </Suspense>
  );
}
