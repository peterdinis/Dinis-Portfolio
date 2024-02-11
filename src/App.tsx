import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layout from './components/shared/Layout';
import AboutMe from './components/AboutMe';
import FavoriteStack from './components/shared/FavoriteStack';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';
import { ContactMe } from './components/contact/Contact';
import { Box } from '@chakra-ui/react';
import { TimeLine } from './components/timeline/TimeLine';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <AboutMe />
                <FavoriteStack />
                <Projects />
                <Box mt={4}>
                    <TimeLine />
                </Box>
                <Box mt={4}>
                    <ContactMe />
                </Box>
                <Footer />
            </Layout>
        </>
    );
};

export default App;
