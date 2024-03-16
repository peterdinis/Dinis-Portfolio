import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ProjectsCards: FC = () => {
    const { t } = useTranslation();

    return (
        <SimpleGrid
            mt={6}
            spacing={6}
            gap={10}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
            
            <ProjectCard
                projectName={'NextPortfolio'}
                projectDescription={t('description.thirdProjectD')}
                projectTech={'Nextjs Typescript TailwindCss'}
                githubLink={'https://github.com/peterdinis/Next-Portfolio'}
                githubLinkText='Github'
                deployLink='next-portfolio-rose-omega.vercel.app'
                deployText='Online'
            />
            <ProjectCard
                projectName={'Moje prvé portfólio'}
                projectDescription={t('description.fourProjectD')}
                projectTech={'React Javascript Material UI'}
                githubLink={'https://github.com/peterdinis/Portfolio-Dinis'}
                githubLinkText='Github'
                deployLink='https://portfolio-dinis.vercel.app/'
                deployText='Online'
            />
            <ProjectCard
                projectName={'React-Code-Editor'}
                projectDescription={t('description.fifthProjectD')}
                projectTech={'React Typescript Recoil Material UI'}
                githubLink={'https://github.com/peterdinis/React-Code-Editor'}
                githubLinkText='Github'
                deployLink='react-code-editor-flame.vercel.app'
                deployText='Online'
            />
            <ProjectCard
                projectName={t('description.sixProjectH')}
                projectDescription={t('description.sixProjectD')}
                projectTech={'Html, Css, Javascript, Bootstrap'}
                githubLink={
                    'https://github.com/peterdinis/Javascript-Snake-Game'
                }
                githubLinkText='Github'
                deployLink='https://modest-elion-018f87.netlify.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName={t('description.sevenProjectH')}
                projectDescription={t('description.sevenProjectD')}
                projectTech={'Nextjs Typescript Firebase Chakra UI'}
                githubLink={'reddit-next-js.vercel.app'}
                githubLinkText='Github'
                deployLink='https://reddit-next-js.vercel.app/'
                deployText='Online'
            />
        </SimpleGrid>
    );
};

export default ProjectsCards;
