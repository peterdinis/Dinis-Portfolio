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
                        welcome: 'Hi 👋 Welcome to my portfolio.',
                        aboutMe: 'A few sentences about me',
                        favoriteStack: 'My favorite tech stack',
                        projectsHeader: 'My projects',
                        expirienceHeader: 'My expirience',
                        contactHeader: 'Are you interested in my work?',
                        contactSecHeader: 'So, write me. 🖊️',
                        email: 'My email: ',
                        github: 'My github: ',
                        linkedIn: 'My linkedIn: ',
                        oMne: 'About me',
                        skusenosti: 'Expirience',
                        projekty: 'Projects',
                        kontakt: 'Contact',
                        secondSentence:
                            'I have the most experience with technologies: React Nestjs and Typescript Node.',
                        firstSentence:
                            'Hi.My name is Peter Dinis. I am 23 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov. My favorite sports are Football and Voleyball.',
                    },
                },
            },

            sk: {
                translation: {
                    description: {
                        firstExpirienceH: "SPŠT Bardejov (1-rok) práca popri škole. FullStack Developer",
                        firstExpirienceSubH: "Školská knižnica projekt Unicorn React-Node-MongoDB",
                        firstExpirienceD: "Školská súťaž ktorú organizovala firma Unicorn ktorá má pobočku v Prešove. Zapojila sa do nej aj moja stredná škola ktorú som navštevoval. Fungovalo to na princípe toho, že škola si vybrala tému a pridelený pracovník z firmy unicorn zo žiakmi danú applikáciu vytváral.Frontend sa robil v Reacte, backend Node.js a MongoDB(databáza)(Firma Unicorn má používa upravenú verziu reactu a node a mongo). Výsledok takmer ročnej práce bol taký, že sa vytvorila školská knižnica, kde žiak si vie požičať knihu vrátiť ju. Učiteľ vie robiť CRUD operácie pre knihy a kategórie a admin(správca) vie dať permisie učiteľom(spravovať knižnicu). Applikáciu som vytvoril sám",
                        secondExpirienceH: "Think Easy (3-Mesiace) Frontend Developer",
                        secondExpirienceD: "V tejto firme som bol počas VŠ. Technológie React Typescript Redux(neskôr React-Query). Pracoval som na applikácií pre Domov Dôchodcov(applikácia na volala Legato). Applikácia ktorá pravdepobodne je vo vývoji stále, fungovala tak že klienti mali na ruke náramky a v tej applikácií zamestanec mohol vidieť či klient je na izbe, alebo je u rodiny, alebo je u lekára). Bol som v malom 10-členom týme, ktorí vytváral tú applikáciu",
                        thirdExpirienceH: "Navisys 11 Mesiacov",
                        thirdExpirienceD: "Firma vytvárala eshop na ktorom sa dajú predávať licencie na softverové produkty. Vedel som byť predajca alebo výrobca. V applikácií som si vedel vytvárať rôzne vzťahy(predajca - výrobca). Techonológie ktoré boli použité: Nx(Monorepo) Vuejs, Nestjs, Docker, Postgresql, Jest. Bol som v malom 7-členom týme ktorý vytváral tú applikáciu.",
                        fourExpirienceH: "Jump Soft Od 1.3.2023",
                        fourExpirinceSubH: "Full stack developer",
                        fourExpirinceD: "Interná vývojová platforma a jazyk spoločnosti (Twinzu), Java, Javascript, PostgreSQL, GitLab, Docker. Projekty, na ktorých pracujem/pracoval som: 1. Slovenská komora daňových poradcov. 2. Úrad pre dohľad nad zdravotnou starostlivosťou UDZS",
                        expirienceHeader: "Moje skúsenosti",
                        secondProjectH: "Spšt knižnica API",
                        sevenProjectD: "Reddit klon",
                        sevenProjectH: "Klon webstránky reddit",
                        sixProjectH: "Hadík hra",
                        sixProjectD: "Hadík hra online",
                        fifthProjectD: "Jednoduchý html / css / javascript editor spravený v Reacte",
                        fourProjectD: "Moje prvé portfólio ktoré som vytvoril",
                        thirdProjectD: "Moje druhé portfólio ktoré som vytvoril",
                        secondProjectD: "API ku projektu SPŠT Knižnica. API má Crud operácie pre Knihy, Kategórie, Autorov, Vydavateľstvá. Dokáže sa zaregistrovať žiak učiteľ, admin a vedia si požičať knihu, vrátiť knihu. Učiteľ a admin majú práva aby mohli spracovať s crud operáciami",
                        firstProjectD: "Stránka o zdravotníckom stredisku. Možnosť si vytvoriť účet. Vytvoriť si termín online u lekára. Lekár vidí svojích pacientov, vidí svoj kalendár.",
                        oMne: "O mne",
                        kontakt: "Kontakt",
                        skusenosti: "Skúsenosti",
                        projekty: "Projekty",
                        linkedIn: "Môj linkedIn: ",
                        github: "Môj github: ",
                        email: "Môj email: ",
                        firstExpirienceHeader: "SPŠT Bardejov (1-rok) práca popri škole",
                        firstExpirienceSubHeader: "Školská knižnica projekt Unicorn React-Node-MongoDB",
                        firstExpirienceDescription: "Školská súťaž ktorú organizovala firma Unicorn ktorá má pobočku v Prešove. Zapojila sa do nej aj moja stredná škola ktorú som navštevoval. Fungovalo to na princípe toho, že škola si vybrala tému a pridelený pracovník z firmy unicorn zo žiakmi danú applikáciu vytváral.Frontend sa robil v Reacte, backend Node.js a MongoDB(databáza)(Firma Unicorn má používa upravenú verziu reactu a node a mongo). Výsledok takmer ročnej práce bol taký, že sa vytvorila školská knižnica, kde žiak si vie požičať knihu vrátiť ju. Učiteľ vie robiť CRUD operácie pre knihy a kategórie a admin(správca) vie dať permisie učiteľom(spravovať knižnicu). Applikáciu som vytvoril sám",
                        contactSecHeader: "Tak mi napíš 🖊️",
                        contactHeader: "Zaujala ťa moja tvorba ?",
                        welcome: "Ahoj 👋 Vitaj na mojom portfóliu.",
                        aboutMe: 'Pár viet o mne',
                        projectsHeader: 'Moje projekty',
                        expireinceHeader: 'Moje skúsenosti',
                        favoriteStack: 'Môj obľubený tech stack',
                        secondSentence:
                            'Najväčšie skúsenosti mám z technológiami: React Nestjs a Typescript Node.',
                        firstSentence:
                            'Ahoj. Volám sa Peter Dinis. Mám 23 rokov. Pochádzam z Bardejova. Naštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Medzi moje záujmy patrí futbal, volejbal.',
                    },
                },
            },
        },
    });

export default i18n;
