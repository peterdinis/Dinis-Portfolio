import { Briefcase, Calendar, Palette, Code } from "lucide-react";

export const TimelineWrapper = () => {
	const experiences = [
		{
			company: "RŠD Projects - Freelance",
			position: "UI/UX Designer & React Developer",
			period: "August 2024 - Present",
			description:
				"Creating comprehensive design systems and developing React applications for various RŠD projects. Responsibilities include user interface design, user experience optimization, and frontend development using modern web technologies.",
			technologies: ["React", "Typescript", "Figma", "Fluent UI", "SharePoint", "UI/UX Design", "Design Systems"],
			blockType: "diamond" // diamond block for latest
		},
		{
			company: "Meditorial - Prague",
			position: "React Developer",
			period: "October 2024 - July 2025",
			description:
				"Development and modification of front-end internal applications",
			technologies: ["React", "Typescript", "Tailwind", "Nextjs", "Docker"],
			blockType: "gold" // gold block for important role
		},
		{
			company: "Jumpsoft - Bratislava",
			position: "Full stack developer",
			period: "March 2023 - May 2024",
			description:
				"Developed MVP from scratch and scaled to support rapid user growth. Built both web and mobile applications.",
			technologies: [
				"React",
				"Typescript",
				"Spring Boot",
				"Twinzu",
				"Postgresql",
				"Mysql",
				"Docker",
				"AWS",
			],
			blockType: "gold" // gold block for important role
		},
		{
			company: "Navysis - Brno",
			position: "Backend Developer",
			period: "February 2022 - January 2023",
			description:
				"The company was creating an e-shop where licenses for software products can be sold. I could be a seller or a producer. I was able to create different relationships in the application (seller - manufacturer). After logging in to the application, the person was able to view various licenses, and then was able to purchase the given license from a specific person (Seller, Ressler, Distributor) Technologies that were used: Nx(Monorepo) Vuejs, Nestjs, Docker, Postgresql, Jest. I was in a small 7-member team that created that application.",
			technologies: [
				"Nestjs",
				"Postgresql",
				"Sequelize",
				"Jest",
				"Nx",
				"Postgresql",
				"Docker",
			],
			blockType: "iron" // iron block for solid experience
		},
		{
			company: "Think Easy s.r.o",
			position: "Frontend Developer Intership",
			period: "April 2021 - June 2021",
			description:
				"I was in this company during university (I didn't finish university, I was at university in Žilina for 1 year). Technologies React Typescript Redux (later React-Query). I worked on applications for the Retirement Home (the application was called Legato). The application, which is probably still under development, worked in such a way that the clients had bracelets on their hands and in that application the employee could see whether the client was in the room, or with family, or with the doctor).",
			technologies: ["React", "Typescript", "Bootstrap", "React-Query"],
			blockType: "stone" // stone block for early career
		},
		{
			company: "Frontend Developer",
			position: "Fronted Developer, Think Easy s.r.o (Erasmus Project)",
			period: "October 2019",
			description:
				"Thanks to the Erasmus program, I had the opportunity to join Think Easy as a React developer. I was part of a 10‑member team. I used these technologies React Javascript Styled‑Components, Redux. I worked on applications for the company Carter s.r.o. (the company deals with printing).The application worked in such a way that the person who wanted to print something clicked on the link where the form was displayed, uploaded the necessary documents and through the backend and zoho hooks this information reached the Carter company employee.",
			technologies: [
				"React",
				"Node.js",
				"Javascript",
				"Redux",
				"Styled-Components",
			],
			blockType: "wood" // wood block for beginning
		},
		{
			company: "Fullstack Developer",
			position: "SPŠT Bardejov (work through school in one competition)",
			period: "September 2019 - July 2020",
			description:
				"A school competition organized by Unicorn, which has a branch in Prešov. My high school, which I attended, also got involved. It worked on the principle that the school chose a topic and an assigned worker from the unicorn company created the given application with the students. The frontend was made in React, the backend was Node.js and MongoDB (database) (the Unicorn company uses a modified version of react and node and mongo ). The result of almost a year's work was that a school library was created, where a student can borrow a book and return it. The teacher can do CRUD operations for books and categories and the admin (administrator) can give permissions to teachers (manage the library). I created the application myself",
			technologies: [
				"React",
				"Uuapp",
				"Nodejs",
				"Javascript",
				"Bootstrap",
				"Jest",
				"MongoDB",
			],
			blockType: "dirt" // dirt block for very early
		},
	];

	const getBlockColor = (blockType: string) => {
		const colors = {
			dirt: "bg-mc-dirt",
			stone: "bg-mc-stone",
			wood: "bg-mc-wood",
			iron: "bg-gray-400",
			gold: "bg-mc-gold",
			diamond: "bg-mc-diamond"
		};
		return colors[blockType as keyof typeof colors] || "bg-mc-stone";
	};

	const getBlockBorder = (blockType: string) => {
		const borders = {
			dirt: "border-mc-dirt border-t-mc-dirt/80 border-l-mc-dirt/80 border-b-mc-dirt/120 border-r-mc-dirt/120",
			stone: "border-mc-stone border-t-mc-stone/80 border-l-mc-stone/80 border-b-mc-stone/120 border-r-mc-stone/120",
			wood: "border-mc-wood border-t-mc-wood/80 border-l-mc-wood/80 border-b-mc-wood/120 border-r-mc-wood/120",
			iron: "border-gray-400 border-t-gray-300 border-l-gray-300 border-b-gray-500 border-r-gray-500",
			gold: "border-mc-gold border-t-yellow-200 border-l-yellow-200 border-b-yellow-600 border-r-yellow-600",
			diamond: "border-mc-diamond border-t-cyan-200 border-l-cyan-200 border-b-cyan-600 border-r-cyan-600"
		};
		return borders[blockType as keyof typeof borders] || "border-mc-stone";
	};

	const getBlockIcon = (blockType: string, position: string) => {
		// Special icon for UI/UX Designer & React Developer role
		if (position.includes("UI/UX Designer") && position.includes("React Developer")) {
			return (
				<div className="relative">
					<Palette className="w-4 h-4 text-white absolute -top-1 -left-1" />
					<Code className="w-4 h-4 text-white absolute -bottom-1 -right-1" />
				</div>
			);
		}
		return <Briefcase className="w-6 h-6 text-white" />;
	};

	return (
		<section id="expirience" className="py-20 minecraft-background">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pixel-text font-minecraft">
						Professional Experience
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto font-minecraft">
						My journey in software development and design
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="relative">
						{/* Minecraft-style timeline track */}
						<div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-4 bg-mc-stone minecraft-block border-2 border-mc-border z-0"></div>
						
						<div className="space-y-8 relative z-10">
							{experiences.map((exp, index) => (
								<div 
									key={index} 
									className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
										index % 2 === 0 ? 'md:flex-row-reverse' : ''
									}`}
								>
									{/* Timeline dot - Minecraft block */}
									<div className="shrink-0 relative z-20">
										<div className={`w-16 h-16 ${getBlockColor(exp.blockType)} minecraft-block border-2 ${getBlockBorder(exp.blockType)} flex items-center justify-center transform hover:scale-110 transition-transform duration-200`}>
											{getBlockIcon(exp.blockType, exp.position)}
										</div>
									</div>

									{/* Content card - Minecraft style */}
									<div className={`flex-1 minecraft-block bg-mc-dark border-2 border-mc-border p-6 transform hover:-translate-y-1 transition-all duration-300 ${
										index % 2 === 0 ? 'md:text-right' : ''
									}`}>
										{/* Block header with Minecraft-style title */}
										<div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center justify-between mb-4 gap-4`}>
											<div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
												<h3 className="text-2xl font-bold text-white mb-2 pixel-text font-minecraft">
													{exp.position}
												</h3>
												<div className={`inline-block px-4 py-2 ${getBlockColor(exp.blockType)} minecraft-block border-2 ${getBlockBorder(exp.blockType)}`}>
													<p className="text-white font-bold font-minecraft text-sm">
														{exp.company}
													</p>
												</div>
											</div>
											
											{/* Date with Minecraft calendar */}
											<div className="flex items-center gap-3 bg-mc-dirt minecraft-block border-2 border-mc-border px-4 py-2">
												<Calendar size={18} className="text-white" />
												<span className="text-white font-minecraft text-sm font-bold">
													{exp.period}
												</span>
											</div>
										</div>

										{/* Description */}
										<p className="text-gray-300 mb-6 leading-relaxed font-minecraft">
											{exp.description}
										</p>

										{/* Technologies as Minecraft items */}
										<div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
											{exp.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className={`px-4 py-2 minecraft-block border-2 border-mc-border text-white font-minecraft text-sm font-bold hover:opacity-80 transition-colors ${
														tech.includes('Design') || tech === 'Figma' 
															? 'bg-purple-600' 
															: 'bg-mc-stone'
													}`}
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Legend */}
					<div className="mt-16 p-6 minecraft-block bg-mc-dark border-2 border-mc-border">
						<h3 className="text-xl font-bold text-white mb-4 pixel-text font-minecraft text-center">
							Experience Level Legend
						</h3>
						<div className="flex flex-wrap justify-center gap-4">
							{[
								{ type: 'diamond', label: 'Current Role' },
								{ type: 'gold', label: 'Key Position' },
								{ type: 'iron', label: 'Solid Experience' },
								{ type: 'stone', label: 'Early Career' },
								{ type: 'wood', label: 'Beginning' },
								{ type: 'dirt', label: 'Foundation' }
							].map((item, index) => (
								<div key={index} className="flex items-center gap-2">
									<div className={`w-6 h-6 ${getBlockColor(item.type)} minecraft-block border-2 ${getBlockBorder(item.type)}`}></div>
									<span className="text-white font-minecraft text-sm">{item.label}</span>
								</div>
							))}
						</div>
						<div className="mt-4 flex justify-center items-center gap-4">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 bg-purple-600 minecraft-block border-2 border-purple-400 border-t-purple-300 border-l-purple-300 border-b-purple-700 border-r-purple-700"></div>
								<span className="text-white font-minecraft text-sm">Design & UX Technologies</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};