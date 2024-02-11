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
                        aboutMe: 'A few sentences about me',
                        favoriteStack: 'My favorite tech stack',
                        projectsHeader: "My projects",
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
                        aboutMe: 'Pár viet o mne',
                        projectsHeader: "Moje projekty",
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
