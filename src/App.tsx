import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layout from './components/shared/Layout';
import AboutMe from './components/AboutMe';
import { Box } from '@chakra-ui/react';
import FavoriteStack from './components/shared/FavoriteStack';
import Projects from './components/projects/Projects';

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
            </Layout>
        </>
    );
};

export default App;
