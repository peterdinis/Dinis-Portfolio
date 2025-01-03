import { CiCircleCheck } from "react-icons/ci";
import { Box, Container, Text, chakra, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const ExpirienceTimeline: FC = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();

    const timelineElements = [
        {
            text: t('description.firstExpirienceH'),
            description: t('description.firstExpirienceSubH'),
            subDescription: t('description.firstExpirienceD'),
            icon: <CiCircleCheck className="circle-icon" />,
        },
        {
            text: t('description.secondExpirienceH'),
            subDescription: t('description.secondExpirienceD'),
            icon: <CiCircleCheck className="circle-icon" />,
        },
        {
            text: t('description.thirdExperienceH'),
            subDescription: t('description.thirdExperienceD'),
            icon: <CiCircleCheck className="circle-icon" />,
        },
        {
            text: t('description.fourExperienceH'),
            subDescription: t('description.fourExperienceD'),
            icon: <CiCircleCheck className="circle-icon" />,
        },

        {
            text: t('description.fifthExperienceH'),
            subDescription: t('description.fifthExperienceD'),
            icon: <CiCircleCheck className="circle-icon" />,
        },
    ];

    return (
        <Container
            id='expirience'
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
                {t('description.expirienceHeader')}
            </chakra.h3>

            <VerticalTimeline>
                {timelineElements.map((element, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <VerticalTimelineElement
                            icon={element.icon}
                            contentStyle={{
                                background:
                                    colorMode === 'dark' ? '#2D3748' : '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                borderRadius: '11px',
                                padding: '18px',
                                marginTop: '2rem',
                                color:
                                    colorMode === 'dark' ? 'white' : 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid ${
                                    colorMode === 'dark' ? '#2D3748' : '#fff'
                                }`,
                            }}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        >
                            <Box className='timelineContentContainer' p={4}>
                                <Text p={2} color='red.500' fontWeight={'bold'}>
                                    {element.text}
                                </Text>
                                <Text m={4} color='blue.500'>
                                    {element.description}
                                </Text>
                                <Text p={2} fontWeight={'italic'}>
                                    {element.subDescription}
                                </Text>
                            </Box>
                        </VerticalTimelineElement>
                    </motion.div>
                ))}
            </VerticalTimeline>
        </Container>
    );
};

export default ExpirienceTimeline;
