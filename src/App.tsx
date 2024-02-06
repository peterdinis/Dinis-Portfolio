import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import FavoriteStack from './components/shared/FavoriteStack';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <FavoriteStack />
        </>
    );
};

export default App;
