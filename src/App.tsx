import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <Footer />
        </>
    );
};

export default App;
