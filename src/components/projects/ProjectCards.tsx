import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { SimpleGrid } from '@chakra-ui/react';

const ProjectsCards: FC = () => {
    return (
        <SimpleGrid
            mt={6}
            spacing={5}
            gap={5}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
            <ProjectCard
                projectName={'MedPortal'}
                projectDescription={'Stránka o zdravotníckom stredisku. Možnosť si vytvoriť účet. Vytvoriť si termín online u lekára. Lekár vidí svojích pacientov, vidí svoj kalendár.'}
                projectTech={'Asp.Net Mvc, Bootstrap 5.3 Jquery'}
                githubLink={'rrrrr'}
            />
        </SimpleGrid>
    );
};

export default ProjectsCards;
