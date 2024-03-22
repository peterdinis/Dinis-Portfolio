import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layout from './components/shared/Layout';
import AboutMe from './components/AboutMe';
import FavoriteStack from './components/shared/FavoriteStack';
import MyProjects from './components/projects/MyProjects';
import Footer from './components/Footer';
import ContactMe from './components/contact/Contact';
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
