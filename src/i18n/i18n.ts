import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
                        googleDocs: 'Siple clone of google docs',
                        googleDocsAPI: 'Google docs api',
                        ecommerceSimple: 'Online shop for selling books',
                        foo: 'Online food shop',
                        covid: 'An application that displays deaths, vaccine variants for covid',
                        gmailClone: 'Clone of gmail website',
                        oldProject: 'My old portfolio',
                        eshopAPI: 'API for online shop',
                        socialGraphql: 'Simple Social site instagram clone',
                        aboutMe: 'A few sentences about me',
                        firstSentence:
                            'Hi.My name is Peter Dinis. I am 22 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov. My favorite sports are Football and Voleyball.',
                        secondSentence:
                            'I have the most experience with technologies: React Nestjs and Typescript Node.',
                        favoriteStack: 'My favorite stack',
                        myProjects: 'Some of my projects',
                        customEditor:
                            'Simple Html Css Js editor for writing code',
                        projectOne: 'Spst Library',
                        projectOneD: 'Copy of the school project web library',
                        projectTwo: 'Backend API for SPST Library',
                        projectTwoD: 'Backend Api copy of school project',
                        projectThreeD: 'DevBookAPI',
                        nodeT: 'Simple template for working with nodejs and typescript',
                        projectSixD:
                            'Photo upload app user can upload photos plus authentication',
                        projectSevenD: 'Crud photos plus full authentication',
                        work: 'My work experience',
                        reddit: 'Reddit app copy',
                        barberShop:
                            'The application for the barber shop allows the user to book an appointment with a barber',
                        libraryApp: 'A simple library application',
                        snakeGame: 'Snake web game',
                        snakeDesc: 'Online web game snake',
                        workOne:
                            '(1-year) School library project Unicorn React-Node-MongoDB - (uuapp)',
                        descriptionOne:
                            'Thanks to the Erasmus program, I had the opportunity to join Think Easy as a React developer. I was part of a 10‑member team. I used these technologies React Javascript Styled‑Components, Redux. I worked on applications for the company Carter s.r.o. (the company deals with printing). The application worked in such a way that the person who wanted to print something clicked on the link where the form was displayed, uploaded the necessary documents and through the backend and zoho hooks this information reached the Carter company employee.',
                        descriptionTwo:
                            'I worked at Think Easy as a university student. The following technologies were used: React Typescript Redux (later React‑Query). I was part of a 10‑member team. I worked on an application for a nursing home (the application is called Legato). In this application, it worked so that the clients of the given home have bracelets on their wrists and the employees know where the given client is.',
                        descriptionThree:
                            'The company where I worked creates an e‑shop where licenses for various software products can be sold. There are different roles in the eshop (seller, buyer, supplier, distributor). In the beginning, in order to be able to buy something on the eshop called superlicensor, I had to buy a superlicensor paid license. I was a member of the 7 team that worked on that application). Technologies used Vuejs Nestjs Typescript Docker Postgresql Jest.',
                        workTwo:
                            '(3-weeks) Erasmus Company Think Easy React.js',
                        jumpSoft:
                            "Company's internal development platform and language (Twinzu), Java, Javascript, PostgreSQL, GitLab, Docker. Projects I work on or I worked on: 1. Slovak Chamber of Tax Advisors. 2. UDZS Office for Health Care Supervision",
                        workFour:
                            '(11-Months) Navisys s.r.o  Nestjs Postgresql Nx Jest',
                        workThree:
                            '(3-Months) Company Think Easy React.js Typescript',
                        knowledge: 'My knowledge',
                        instaBE: 'Api for instagram application',
                        emailInfo:
                            'If you are interested in my work, write to me at',
                        sppedDateApp: 'Blind date app',
                        uuappHeader: 'What is uuapp',
                        newProject: 'Simple social site',
                        insta: 'Instagram clone',
                        newProjectTwo: 'Client for foodStore e-commerce app',
                        newProjectThree: 'API for foodStore e-commerce app',
                        foodAPI: 'API for online food ordering',
                        foodClient: 'Application for ordering food',
                        contactMe:
                            'If you are interested in my work, write to my email',
                        foodApp: 'Application for ordering food online',
                        foodAppAPI: 'Api to online food ordering apps',
                        netflix: 'Netflix website copy',
                        netflixAPI: 'API for netflix project',
                        simpleFoodShop: 'Application for buying food online',
                        graphTalkFE: 'Social site graphTalk',
                        spotify: 'Spotify website clone',
                        onlineSite: 'Website',
                        docuCraft: 'Docu-Craft Your friend for work from pdf',
                        devnotion: 'Simple Notion clone',
                        sevenDesc:
                            'A simple control panel administrator can add customer books and issues and see questions from page users',
                        zoom_mate: 'Online application for speed dating',
                        dropShared:
                            'Application for uploading and sharing files',
                        uuappText:
                            'This project was done during high school. The unicorn company announced a competition and the school I visited to apply. With the help of their framework we had to create a page. Their framework is based on the principle of React Node Mongodb (Modified version)',
                    },
                },
            },

            sk: {
                translation: {
                    description: {
                        zoom_mate: 'Online applikácia na rýchle rande',
                        googleDocsAPI: 'API pre projekt google docs',
                        jumpSoft:
                            'Interná vývojová platforma a jazyk spoločnosti (Twinzu), Java, Javascript, PostgreSQL, GitLab, Docker. Projekty, na ktorých pracujem/pracoval som: 1. Slovenská komora daňových poradcov. 2. Úrad pre dohľad nad zdravotnou starostlivosťou UDZS',
                        graphTalkFE: 'Socialná sieť graphTalk',
                        dropShared:
                            'Applikácia pre vzdelanie a ukladanie súborov',
                        simpleFoodShop: 'Applikácia na objednávanie jedál',
                        barberShop:
                            'Aplikácia pre holičstvo používateľ si vie objednať termín o hoľiča',
                        googleDocs: 'Klon google dokumentov',
                        onlineSite: 'Webstránka',
                        docuCraft: 'Docu-Craft Tvoj kamarát pre prácu z pdf',
                        customEditor:
                            'Jednoduchý Html, Css, Js editor pre písanie kódu',
                        ecommerceSimple: 'Online shop na predaj kníh',
                        snakeDesc: 'Online webová hra had',
                        contactMe:
                            'Ak ťa moja tvorba zaujala napíš mi na môj email',
                        netflix: 'Kópia stránky netflix',
                        devnotion: 'Notion stránka klon',
                        netflixAPI: 'API pre netlifx applikáciu',
                        gmailClone: 'Klon stránky gmail',
                        spotify: 'Klon stránky spotify',
                        libraryApp: 'Jednoduchá knižničná aplikácia',
                        speedDateApp: 'Applikácia pre rýchle rande online',
                        snakeGame: 'Webová hra had',
                        nodeT: 'Jednoduchá template pre prácu z nodejs a typescript',
                        foodApp: 'Applikácia na objednávanie jedál online',
                        foodAppAPI:
                            'Api ku applikácií na objednávanie jedál online',
                        disneyClone: 'Klon stránky Disney+',
                        foo: 'Online shop na nákup jedla',
                        socialGraphAPI: 'API k sociálnej siete',
                        socialGraphql:
                            'Jednoduchá socialná sieť podobná instagramu',
                        reddit: 'Kópia applikácie reddit',
                        insta: 'Kópia applikácie instagram',
                        instaBE: 'API pre applikáciu instagram',
                        oldProject: 'Moje staré portfolio',
                        aboutMe: 'Pár viet o mne',
                        workFour:
                            '(11-Mesiacov) Navisys s.r.o Nestjs Postgresql Nx Jest',
                        firstSentence:
                            'Ahoj. Volám sa Peter Dinis. Mám 22 rokov. Pochádzam z Bardejova. Naštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Medzi moje záujmy patrí futbal, volejbal.',
                        secondSentence:
                            'Najväčšie skúsenosti mám z technológiami: React Nestjs a Typescript Node.',
                        favoriteStack: 'Môj obľubený stack',
                        newProjectOne: 'Jednoduchá e-commerce aplikácia v node',
                        myProjects: 'Niektoré moje projekty',
                        newProjectTwo: 'Frontend k e-commerce-app',
                        newProjectThree: 'Api k e-commerce-app',
                        projectOne: 'Spšt Knižnica',
                        projectOneD:
                            'Kkopia školského projektu online webová knižnica',
                        projectTwo: 'Backend API ku školskej knižnici',
                        projectTwoD: 'Backend Api kopia školského projektu',
                        projectFourD: 'Webová hra hadík',
                        work: 'Moje pracovné skúsenosti',
                        workOne:
                            '(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB - (uuapp)',
                        descriptionOne:
                            'Školská súťaž ktorú organizovala firma Unicorn ktorá má pobočku v Prešove. Zapojila sa do nej aj moja stredná škola ktorú som navštevoval. Fungovalo to na princípe toho, že škola si vybrala tému a pridelený pracovník z firmy unicorn zo žiakmi danú applikáciu vytváral.Frontend sa robil v Reacte, backend Node.js a MongoDB(databáza)(Firma Unicorn má používa upravenú verziu reactu a node a mongo). Výsledok takmer ročnej práce bol taký, že sa vytvorila školská knižnica, kde žiak si vie požičať knihu vrátiť ju. Učiteľ vie robiť CRUD operácie pre knihy a kategórie a admin(správca) vie dať permisie učiteľom(spravovať knižnicu). Applikáciu som vytvoril sám',
                        descriptionTwo:
                            'V tejto firme som bol počas VŠ. Technológie React Typescript Redux(neskôr React-Query). Pracoval som na applikácií pre Domov Dôchodcov(applikácia na volala Legato). Applikácia ktorá pravdepobodne je vo vývoji stále, fungovala tak že klienti mali na ruke náramky a v tej applikácií zamestanec mohol vidieť či klient je na izbe, alebo je u rodiny, alebo je u lekára). Bol som v malom 10-členom týme, ktorí vytváral tú applikáciu',
                        descriptionThree:
                            'Firma vytvárala eshop na ktorom sa dajú predávať licencie na softverové produkty. Vedel som byť predajca alebo výrobca. V applikácií som si vedel vytvárať rôzne vzťahy(predajca - výrobca). Techonológie ktoré boli použité: Nx(Monorepo) Vuejs, Nestjs, Docker, Postgresql, Jest. Bol som v malom 7-členom týme ktorý vytváral tú applikáciu.',
                        workTwo: '(3-týždne) Erazmus Firma Think Easy React.js',
                        workThree:
                            '(3-Mesiace) Firma Think Easy React.js Typescript',
                        knowledge: 'Moje znalosti',
                        emailInfo: 'Ak ťa moja tvorba zaujala tak mi napíš na',
                        covid: 'Aplikácia ktorá zobrazí umrtia, vakciný varianty pre covid',
                        uuappHeader: 'Čo je uuapp',
                        uuappText:
                            'Tento projekt bol robený počas strednej školy. Firma unicorn vyhlásila súťaž a školu ktorú som navštívil sa prihlásiť. Za pomoci ich frameworku sme mali vytvoriť stránku.Ich framework je postavený na princípe React Node Mongodb (Upravená verzia)',
                        sevenDesc:
                            'Jednoduchý dashboard admin vie pridať knihy zákazníkov a problémy a vidí otázky používateľov stránky',
                    },
                },
            },
        },
    });

export default i18n;
