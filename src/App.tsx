import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import FavoriteStack from './components/shared/FavoriteStack';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Layout from './components/shared/Layout';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <AboutMe />
                <FavoriteStack />
                <Projects />
                <Contact />
                <Footer />
            </Layout>
        </>
    );
};

export default App;
