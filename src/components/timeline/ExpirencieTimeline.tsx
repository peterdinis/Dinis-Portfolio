import { Container, chakra, Box, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const ExperienceTimeline: FC = () => {
  const { t } = useTranslation();

  const timelineElements = [
    { text: 'Eat', icon: <CheckCircleIcon color='blue.500' boxSize={6} /> },
    { text: 'Eat', icon: <CheckCircleIcon color='blue.500' boxSize={6} /> },
    { text: 'Eat', icon: <CheckCircleIcon color='blue.500' boxSize={6} /> },
    { text: 'Eat', icon: <CheckCircleIcon color='blue.500' boxSize={6} /> },
    { text: 'Eat', icon: <CheckCircleIcon color='blue.500' boxSize={6} /> },
  ];

  return (
    <Container id='experience' maxWidth='7xl' p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize='4xl' fontWeight='bold' mb={18} textAlign='center'>
        {t('description.experienceHeader')}
      </chakra.h3>

      <VerticalTimeline layout="1-column">
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              padding: '16px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #fff',
            }}
            position={index % 2 === 0 ? 'left' : 'right'} // Alternate between left and right
          >
            <Box className='timelineContentContainer' p={4}>
              <Text>{element.text}</Text>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default ExperienceTimeline;