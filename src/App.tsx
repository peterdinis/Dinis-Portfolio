import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layout from './components/shared/Layout';
import AboutMe from './components/AboutMe';
import { Box } from '@chakra-ui/react';
import FavoriteStack from './components/shared/FavoriteStack';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';
import { ContactMe } from './components/contact/Contact';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <AboutMe />
                <Box mt={5}>
                    <FavoriteStack />
                </Box>
                <Box mt={5}>
                    <Projects />
                </Box>

                <Box mt={4}>
                    <ContactMe />
                </Box>
                
                <Box mt={3}>
                    <Footer />
                </Box>
            </Layout>
        </>
    );
};

export default App;
