import { FC } from 'react';
import SecondaryHeader from '../shared/SecondaryHeader';
import ProjectsCards from './ProjectCards';
import { chakra } from '@chakra-ui/react';

const Projects: FC = () => {
    return (
        <chakra.div id='projects'>
            <SecondaryHeader text='Moje projekty' />
            <ProjectsCards />
        </chakra.div>
    );
};

export default Projects;
