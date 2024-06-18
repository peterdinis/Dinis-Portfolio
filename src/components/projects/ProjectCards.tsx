import { SimpleGrid } from "@chakra-ui/react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

const ProjectsCards: FC = () => {
	const { t } = useTranslation();

	return (
		<SimpleGrid
			mt={6}
			p={3}
			spacing={6}
			gap={10}
			templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
		>
			<ProjectCard
				projectName={t("description.secondPortfolio")}
				projectDescription={t("description.thirdProjectD")}
				projectTech={"Nextjs Typescript TailwindCss"}
				githubLink={"https://github.com/peterdinis/Next-Portfolio"}
				githubLinkText="Github"
				deployLink="next-portfolio-rose-omega.vercel.app"
				deployText="Online"
			/>

			<ProjectCard
				projectName={t("description.firstPortfolio")}
				projectDescription={t("description.firstPortfolio")}
				projectTech={"React Javascript Material UI"}
				githubLink={"https://github.com/peterdinis/Portfolio-Dinis"}
				githubLinkText="Github"
				deployLink="https://portfolio-dinis.vercel.app/"
				deployText="Online"
			/>

			<ProjectCard
				projectName={"React-Code-Editor"}
				projectDescription={t("description.fifthProjectD")}
				projectTech={"React Typescript Recoil Material UI"}
				githubLink={"https://github.com/peterdinis/React-Code-Editor"}
				githubLinkText="Github"
				deployLink="react-code-editor-flame.vercel.app"
				deployText="Online"
			/>

			<ProjectCard
				projectName={t("description.spstHeader")}
				projectDescription={t("description.spstClone")}
				projectTech={
					"Nextjs Typescript T3Stack ShadcnUI Prisma Postgresql"
				}
				githubLink={"https://github.com/peterdinis/spst-library"}
				githubLinkText="Github"
			/>

			<ProjectCard
				projectName={t("description.spstAuthHeader")}
				projectDescription={t("description.spstAuth")}
				projectTech={"Nestjs Typescript Prisma Postgresql"}
				githubLink={"https://github.com/peterdinis/spst-library-auth"}
				githubLinkText="Github"
			/>

			<ProjectCard
				projectName={"Node Starter"}
				projectDescription={t("description.nodeStarter")}
				projectTech={"Node Express Typescript Bun Biome"}
				githubLink={
					"https://github.com/peterdinis/Node-Typescript-Starter"
				}
				githubLinkText="Github"
			/>

			<ProjectCard
				projectName={"Reddit clone"}
				projectDescription={t("description.sevenProjectH")}
				projectTech={"Nextjs Typescript Firebase Chakra UI"}
				githubLink={"reddit-next-js.vercel.app"}
				githubLinkText="Github"
				deployLink="https://reddit-next-js.vercel.app/"
				deployText="Online"
			/>

			<ProjectCard
				projectName={t("description.sixProjectH")}
				projectTech={"Html, Css, Javascript, Bootstrap"}
				githubLink={
					"https://github.com/peterdinis/Javascript-Snake-Game"
				}
				githubLinkText="Github"
				deployLink="https://modest-elion-018f87.netlify.app/"
				deployText="Online"
			/>
		</SimpleGrid>
	);
};

export default ProjectsCards;
