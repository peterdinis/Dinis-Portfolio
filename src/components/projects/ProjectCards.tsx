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
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
            <ProjectCard
                projectName={'aaaa'}
                projectDescription={'aaaa'}
                projectTech={'rrrr'}
                deployLink='aaaa'
                githubLink={'rrrrr'}
            />
        </SimpleGrid>
    );
};

export default ProjectsCards;
