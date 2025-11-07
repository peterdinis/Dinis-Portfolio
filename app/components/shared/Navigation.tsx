import { FC, useState } from "react";
import {motion} from "framer-motion"
import { useMinecraftSound } from "@/app/hooks/useMinecraftSound";

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
    return (
        <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 minecraft-block p-2 md:p-4"
        style={{ backgroundColor: 'var(--mc-dirt)' }}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => {
                playSound('click', 0.3);
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`minecraft-button px-2 md:px-4 py-2 text-[10px] md:text-xs ${
                activeSection === section.id ? 'text-black' : 'text-mc-light'
              }`}
              style={{
                backgroundColor: activeSection === section.id ? 'var(--mc-grass)' : 'var(--mc-wood)',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = 'var(--mc-stone)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = 'var(--mc-wood)';
                }
              }}
            >
              <span className="mr-1">{section.icon}</span>
              {section.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    )
}

export default Navigation