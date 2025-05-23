import { SimpleGrid } from '@chakra-ui/react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

const ProjectsCards: FC = () => {
    const { t } = useTranslation();

    return (
        <SimpleGrid
            mt={6}
            p={3}
            spacing={6}
            gap={10}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
            <ProjectCard
                projectName={t('description.secondPortfolio')}
                projectDescription={t('description.thirdProjectD')}
                projectTech={'Nextjs Typescript TailwindCss'}
                githubLink={'https://github.com/peterdinis/Next-Portfolio'}
                githubLinkText='Github'
                deployLink='https://next-portfolio-rose-omega.vercel.app'
                deployText='Online'
            />

            <ProjectCard
                projectName={t('description.firstPortfolio')}
                projectDescription={t('description.firstPortfolio')}
                projectTech={'React Javascript Material UI'}
                githubLink={'https://github.com/peterdinis/Portfolio-Dinis'}
                githubLinkText='Github'
                deployLink='https://portfolio-dinis.vercel.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName={t('description.notionHeader')}
                projectDescription={t('description.notionClone')}
                projectTech={'Nextjs Typescript Convex Tailwind'}
                githubLink={'https://github.com/peterdinis/My-Notion'}
                githubLinkText='Github'
                deployLink='https://my-notion-peach.vercel.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName={'React-Code-Editor'}
                projectDescription={t('description.fifthProjectD')}
                projectTech={'React Typescript Recoil Material UI'}
                githubLink={'https://github.com/peterdinis/React-Code-Editor'}
                githubLinkText='Github'
                deployLink='https://react-code-editor-flame.vercel.app'
                deployText='Online'
            />

            <ProjectCard
                projectName={t('description.spstHeader')}
                projectDescription={t('description.spstClone')}
                projectTech={
                    'Nextjs Typescript T3Stack ShadcnUI Prisma Postgresql'
                }
                githubLink={'https://github.com/peterdinis/Library-App'}
                githubLinkText='Github'
                deployLink='https://library-app-production-4e64.up.railway.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName='Docu Nest'
                projectDescription={t('description.docuNest')}
                projectTech='Nextjs Typescript Prisma NextUI Tailwind Next-Auth'
                githubLink='https://github.com/peterdinis/Vision-Craft'
                githubLinkText='Github'
                deployLink='https://docu-nest.vercel.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName={t('description.sixProjectH')}
                projectTech={'Html, Css, Javascript, Bootstrap'}
                githubLink={
                    'https://github.com/peterdinis/Javascript-Snake-Game'
                }
                githubLinkText='Github'
                deployLink='https://modest-elion-018f87.netlify.app/'
                deployText='Online'
            />
        </SimpleGrid>
    );
};

export default ProjectsCards;
