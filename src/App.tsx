import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Expirience from './components/Expirience';
import Projects from './components/Projects';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Expirience />
            <Projects />
            <Footer />
        </>
    );
};

export default App;
