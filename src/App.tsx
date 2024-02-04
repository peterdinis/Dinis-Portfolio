import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <Contact />
            <Footer />
        </>
    );
};

export default App;
