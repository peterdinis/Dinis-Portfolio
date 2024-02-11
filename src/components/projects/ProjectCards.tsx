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
                projectDescription={
                    'Stránka o zdravotníckom stredisku. Možnosť si vytvoriť účet. Vytvoriť si termín online u lekára. Lekár vidí svojích pacientov, vidí svoj kalendár.'
                }
                projectTech={'Asp.Net Mvc, Bootstrap 5.3 Jquery'}
                githubLink={'https://github.com/peterdinis/MedPortal'}
                githubLinkText='Github'
            />
            <ProjectCard
                projectName={'Spšt knižnica API'}
                projectDescription={
                    'API ku projektu SPŠT Knižnica. API má Crud operácie pre Knihy, Kategórie, Autorov, Vydavateľstvá. Dokáže sa zaregistrovať žiak učiteľ, admin a vedia si požičať knihu, vrátiť knihu. Učiteľ a admin majú práva aby mohli spracovať s crud operáciami'
                }
                projectTech={'Asp.Net Postgresql'}
                githubLink={
                    'https://github.com/peterdinis/Spst-Kniznica-Backend'
                }
                githubLinkText='Github'
            />
            <ProjectCard
                projectName={'NextPortfolio'}
                projectDescription={'Moje druhé portfólio ktoré som vytvoril'}
                projectTech={'Nextjs Typescript TailwindCss'}
                githubLink={'https://github.com/peterdinis/Next-Portfolio'}
                githubLinkText='Github'
                deployLink='next-portfolio-rose-omega.vercel.app'
                deployText='Online'
            />
            <ProjectCard
                projectName={'Moje prvé portfólio'}
                projectDescription={'Moje prvé portfólio ktoré som vytvoril'}
                projectTech={'React Javascript Material UI'}
                githubLink={'https://github.com/peterdinis/Portfolio-Dinis'}
                githubLinkText='Github'
                deployLink='https://portfolio-dinis.vercel.app/'
                deployText='Online'
            />
            <ProjectCard
                projectName={'React-Code-Editor'}
                projectDescription={
                    'Jednoduchý html / css / javascript editor spravený v Reacte'
                }
                projectTech={'React Typescript Recoil Material UI'}
                githubLink={'https://github.com/peterdinis/React-Code-Editor'}
                githubLinkText='Github'
                deployLink='react-code-editor-flame.vercel.app'
                deployText='Online'
            />
            <ProjectCard
                projectName={'Hadík hra'}
                projectDescription={'Hadík hra online'}
                projectTech={'Html, Css, Javascript, Bootstrap'}
                githubLink={
                    'https://github.com/peterdinis/Javascript-Snake-Game'
                }
                githubLinkText='Github'
                deployLink='https://modest-elion-018f87.netlify.app/'
                deployText='Online'
            />

            <ProjectCard
                projectName={'Reddit Clone'}
                projectDescription={'Klon stránky Reddit'}
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
