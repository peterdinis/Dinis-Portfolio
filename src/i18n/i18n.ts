import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'sk',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    description: {
                        notionHeader: 'Notion application',
                        notionClone: 'My simple version of notion application',
                        sketchCraft: 'Light weight clone of figma',
                        shareSync: 'Application for storing files',
                        firstExpirienceH:
                            'SPŠT Bardejov (1 year) - Work alongside school. FullStack Developer',
                        firstExpirienceSubH:
                            'School Library Project Unicorn React-Node-MongoDB',
                        firstExpirienceD:
                            'School competition organized by Unicorn company with a branch in Prešov. My high school participated, and the concept involved the school choosing a theme, and a Unicorn employee worked with students to create the application. Frontend was developed in React, backend in Node.js, and MongoDB was used as the database (Unicorn uses a modified version of React, Node, and MongoDB). After almost a year of work, we created a school library where students can borrow and return books. Teachers can perform CRUD operations for books and categories, and the admin (manager) can grant permissions to teachers (manage the library). I created the application by myself.',
                        secondExpirienceH:
                            'Think Easy (3 months) - Frontend Developer',
                        secondExpirienceD:
                            'I worked at this company during my university studies. Technologies used were React, Typescript, Redux (later React-Query). I worked on an application for Retirement Homes called Legato. The application, likely still in development, allowed employees to track whether a client was in their room, with family, or at the doctor using bracelets worn by clients. I was part of a small 10-member team developing this application.',
                        thirdExperienceH:
                            'Navisys (11 months) Fullstack developer',
                        thirdExperienceD:
                            'The company developed an e-shop for selling licenses of software products, where I could act as a seller or a manufacturer. In the application, I could establish various relationships (seller - manufacturer). Technologies used included Nx (Monorepo), Vue.js, Nest.js, Docker, Postgresql, and Jest. I was part of a small 7-member team creating this application.',
                        fourExperienceH:
                            'Jump Soft 1.3.2023 - 27.5.2024 Fullstack developer',
                        fourExperienceD:
                            'Internal development platform and language of the company (Twinzu), Java, Javascript, PostgreSQL, GitLab, Docker. Projects I am/was working on: 1. Slovak Chamber of Tax Advisors. 2. Office for Supervision of Health Care (UDZS). 3. Development of an internal company application for attendance monitoring. 4. Electronic form application(EForm). 5 People-to-people (partial modifications)',

                        fifthExperienceH: 'MeDitorial React.js Developer',
                        fifthExperienceD: 'From 1.10',
                        welcome: 'Hi 👋 Welcome to my portfolio.',
                        aboutMe: 'A few sentences about me',
                        favoriteStack: 'My favorite tech stack',
                        projectsHeader: 'My projects',
                        expirienceHeader: 'My expirience',
                        contactHeader: 'Are you interested in my work?',
                        contactSecHeader: 'So, write me message. 🖊️',
                        email: 'My email: ',
                        github: 'My github: ',
                        taskMasterDesc:
                            'Task master. An alternative to Jira. We can create our team, create projects for project tasks, sprints.',
                        taskMasterFE: 'Frontend part for Task Master project',
                        taskMasterAPI: 'API. For the task master project.',
                        nodeStarter:
                            'Simple starter node typescript bun template',
                        linkedIn: 'My linkedIn: ',
                        oMne: 'About me',
                        skusenosti: 'Expirience',
                        projekty: 'My projects',
                        kontakt: 'Contact',
                        sevenProjectH: 'Clone of reddit website',
                        thirdProjectD: 'My second portfolio that I created',
                        firstPortfolio: 'My first porfolio that I created',
                        secondPortfolio: 'My second porfolio',
                        fifthProjectD:
                            'Simple code editor for writing html / css and javascript',
                        secondSentence:
                            'I have the most experience with technologies: React Javascript Nestjs and Typescript Node.',
                        firstSentence:
                            'Hi 👋. My name is Peter Dinis. I am 24 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov. My favorite sports are Football and Volleyball. Now working on Prague.',
                        spstClone:
                            'A clone of the SPŠT Library project that I developed for the Unicorn competition',
                        spstAuth: 'Auth server for SPŠT Library',
                        spstHeader: 'SPŠT Library',
                        sixProjectH: 'Snake game',
                        podwave: 'Application for listening podcasts',
                        spstAuthHeader: 'SPŠT Auth server',
                        docuNest:
                            'An application for writing notes from AI supports',
                    },
                },
            },

            sk: {
                translation: {
                    description: {
                        fifthExperienceH: 'MeDitorial React.js Developer',
                        fifthExperienceD: 'Od 1.10',
                        notionHeader: 'Notion applikácia',
                        notionClone: 'Moja jednoduchá verzia applikácie Notion',
                        taskMasterAPI: 'API, Pre projekt Task Master',
                        taskMasterFE: 'Frontend applikácia pre Task Master',
                        taskMasterDesc:
                            'Task master. Alternatíva pre Jiru. Vieme si vytvoriť svoj tím, vytvárať projekty pre projekt tasky, šprinty.',
                        nodeStarter:
                            'Template pre node applikácie. Použité technologie Node Typescript Bun',
                        docuNest:
                            'Applikácia na písanie poznámok z AI podporou',
                        spstAuthHeader: 'SPŠT Autentifikačný server',
                        spstHeader: 'SPŠT Knižnica',
                        spstAuth:
                            'Autentifikačný server pre prihlasovanie do spst-knižnica',
                        spstClone:
                            'Klon projektu SPŠT Knižnica ktorí som vývijal pre sútaž Unicorn',
                        sketchCraft: 'Jednoduchý figma clone',
                        shareSync: 'Applikácia na ukladanie súborov',
                        bugOverflow: 'Frontend ku applikácií bug overflow',
                        bugOverflowAPI:
                            'API pre našu applikáciu kde viem písať programátorske otázky a viem na ne aj odpovedať',
                        firstExpirienceH:
                            'SPŠT Bardejov (1-rok) práca popri škole. FullStack Developer',
                        firstExpirienceSubH:
                            'Školská knižnica projekt Unicorn React-Node-MongoDB',
                        firstExpirienceD:
                            'Školská súťaž ktorú organizovala firma Unicorn ktorá má pobočku v Prešove. Zapojila sa do nej aj moja stredná škola ktorú som navštevoval. Fungovalo to na princípe toho, že škola si vybrala tému a pridelený pracovník z firmy unicorn zo žiakmi danú applikáciu vytváral.Frontend sa robil v Reacte, backend Node.js a MongoDB(databáza)(Firma Unicorn používa upravenú verziu reactu a node a mongo). Výsledok takmer ročnej práce bol taký, že sa vytvorila školská knižnica, kde žiak si vie požičať knihu vrátiť ju. Učiteľ vie robiť CRUD operácie pre knihy a kategórie a admin(správca) vie dať permisie učiteľom(spravovať knižnicu). Applikáciu som vytvoril sám',
                        secondExpirienceH:
                            'Think Easy (3-Mesiace) Frontend Developer',
                        secondExpirienceD:
                            'V tejto firme som bol počas VŠ. Technológie React Typescript Redux(neskôr React-Query). Pracoval som na applikácií pre Domov Dôchodcov(applikácia sa volala Legato). Applikácia ktorá pravdepobodne je vo vývoji stále, fungovala tak že klienti mali na ruke náramky a v tej applikácií zamestanec mohol vidieť či klient je na izbe, alebo je u rodiny, alebo je u lekára). Bol som v malom 10-členom tíme, ktorí vytváral tú applikáciu',
                        thirdExperienceH:
                            'Navisys 11 Mesiacov fullstack developer',
                        thirdExperienceD:
                            'Firma vytvárala eshop na ktorom sa dajú predávať licencie na softverové produkty. Vedel som byť predajca alebo výrobca. V applikácií som si vedel vytvárať rôzne vzťahy(predajca - výrobca). Techonológie ktoré boli použité: Nx(Monorepo) Vuejs, Nestjs, Docker, Postgresql, Jest. Bol som v malom 7-členom tíme ktorý vytváral tú applikáciu.',
                        fourExperienceH:
                            'Jump Soft 1.3.2023 - 27.5.2024 Fullstack developer',
                        fourExperienceD:
                            'Interná vývojová platforma a jazyk spoločnosti (Twinzu), Java, Javascript, PostgreSQL, GitLab, Docker. Projekty, na ktorých pracujem/pracoval som: 1. Slovenská komora daňových poradcov. 2. Úrad pre dohľad nad zdravotnou starostlivosťou UDZS 3.Vyvoj internej firemnej aplikácie pre monitorovanie dochádzky. 4. Applikácia elektronické formuláre(Eformuláre). 5 Ľudia-ľudom(čiastočné úpravy na projekte) ',
                        expirienceHeader: 'Moje skúsenosti',
                        secondProjectH: 'Spšt knižnica API',
                        sevenProjectD: 'Reddit klon',
                        sevenProjectH: 'Klon webstránky reddit',
                        sixProjectH: 'Hadík hra',
                        sixProjectD: 'Hadík hra othirdProjectDnline',
                        fifthProjectD:
                            'Jednoduchý html / css / javascript editor spravený v Reacte',
                        firstPortfolio: 'Moje prvé portfólio',
                        secondPortfolio: 'Moje druhé portfólio',
                        fourProjectD: 'Moje prvé portfólio ktoré som vytvoril',
                        thirdProjectD:
                            'Moje druhé portfólio ktoré som vytvoril',
                        secondProjectD:
                            'API ku projektu SPŠT Knižnica. API má Crud operácie pre Knihy, Kategórie, Autorov, Vydavateľstvá. Dokáže sa zaregistrovať žiak učiteľ, admin a vedia si požičať knihu, vrátiť knihu. Učiteľ a admin majú práva aby mohli spracovať s crud operáciami',
                        firstProjectD:
                            'Stránka o zdravotníckom stredisku. Možnosť si vytvoriť účet. Vytvoriť si termín online u lekára. Lekár vidí svojích pacientov, vidí svoj kalendár.',
                        oMne: 'O mne',
                        kontakt: 'Kontakt',
                        skusenosti: 'Skúsenosti',
                        projekty: 'Projekty',
                        linkedIn: 'Môj linkedIn: ',
                        github: 'Môj github: ',
                        email: 'Môj email: ',
                        contactSecHeader: 'Tak mi napíš 🖊️',
                        contactHeader: 'Zaujala ťa moja tvorba ?',
                        welcome: 'Ahoj 👋 Vitaj na mojom portfóliu.',
                        aboutMe: 'Pár viet o mne',
                        projectsHeader: 'Moje projekty',
                        expireinceHeader: 'Moje skúsenosti',
                        podwave: 'Applikácia na počúvanie podcastov',
                        favoriteStack: 'Môj obľubený tech stack',
                        secondSentence:
                            'Najväčšie skúsenosti mám z technológiami: React Javascript Nestjs a Typescript Node.',
                        firstSentence:
                            'Ahoj 👋. Volám sa Peter Dinis. Mám 24 rokov. Pochádzam z Bardejova. Navštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Medzi moje záujmy patrí futbal, volejbal. Aktuálne pracujem v Prahe.',
                    },
                },
            },
        },
    });

export default i18n;
