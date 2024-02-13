import { Container, chakra, Box, Text, useColorMode } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline: FC = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();

    const timelineElements = [
        {
            text: t('description.firstExpirienceH'),
            description: t('description.firstExpirienceSubH'),
            subDescription: t('description.firstExpirienceD'),
            icon: <CheckCircleIcon color='blue.500' boxSize={6} />,
        },
        {
            text: t('description.secondExpirienceH'),
            subDescription: t('description.secondExpirienceD'),
            icon: <CheckCircleIcon color='blue.500' boxSize={6} />,
        },
        {
            text: t('description.thirdExperienceH'),
            subDescription: t('description.thirdExperienceD'),
            icon: <CheckCircleIcon color='blue.500' boxSize={6} />,
        },
        {
            text: t('description.fourExpirienceH'),
            subDescription: t('description.fourExperienceD'),
            icon: <CheckCircleIcon color='blue.500' boxSize={6} />,
        },
    ];

    return (
        <Container
            id='experience'
            maxWidth='7xl'
            p={{ base: 2, sm: 10 }}
            color={colorMode === 'dark' ? 'white' : 'inherit'}
        >
            <chakra.h3
                fontSize='4xl'
                fontWeight='bold'
                mb={18}
                textAlign='center'
            >
                {t('description.expireinceHeader')}
            </chakra.h3>

            <VerticalTimeline layout='1-column'>
                {timelineElements.map((element, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <VerticalTimelineElement
                            icon={element.icon}
                            contentStyle={{
                                background:
                                    colorMode === 'dark' ? '#2D3748' : '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                borderRadius: '8px',
                                padding: '16px',
                                marginTop: '2rem',
                                color:
                                    colorMode === 'dark' ? 'white' : 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid ${colorMode === 'dark' ? '#2D3748' : '#fff'}`,
                            }}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        >
                            <Box className='timelineContentContainer' p={4}>
                                <Text>{element.text}</Text>
                                <Text>{element.description}</Text>
                                <Text>{element.subDescription}</Text>
                            </Box>
                        </VerticalTimelineElement>
                    </motion.div>
                ))}
            </VerticalTimeline>
        </Container>
    );
};

export default ExperienceTimeline;
