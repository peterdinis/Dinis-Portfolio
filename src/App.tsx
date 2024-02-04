import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
        </>
    );
};

export default App;
