import { FC } from 'react';
import SecondaryHeader from '../shared/SecondaryHeader';
import ProjectsCards from './ProjectCards';

const Projects: FC = () => {
    return (
        <>
            <SecondaryHeader text='Moje projekty' />
            <ProjectsCards />
        </>
    );
};

export default Projects;
