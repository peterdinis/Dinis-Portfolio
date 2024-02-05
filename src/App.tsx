import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Footer />
        </>
    );
};

export default App;
