"use client"

import { FC } from "react";
import { AnimatedBlock } from "../AnimatedBlock";
import {motion} from "framer-motion"

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

const Skills: FC = () => {
    return (
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
    )
}

export default Skills