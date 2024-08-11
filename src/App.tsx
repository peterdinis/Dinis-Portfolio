import type { FC } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactMe from './components/contact/Contact';
import MyProjects from './components/projects/MyProjects';
import Layout from './components/shared/Layout';
import FavoriteStack from './components/stack/FavoriteStack';
import ExpirienceTimeline from './components/timeline/ExpirencieTimeline';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <AboutMe />
                <FavoriteStack />
                <MyProjects />
                <ExpirienceTimeline />
                <ContactMe />
                <Footer />
            </Layout>
        </>
    );
};

export default App;
