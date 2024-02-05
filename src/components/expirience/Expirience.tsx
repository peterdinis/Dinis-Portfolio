import { FC } from 'react';
import SecondaryHeader from '../shared/SecondaryHeader';
import {
    Container,
    Flex,
    useBreakpointValue,
    chakra,
} from '@chakra-ui/react';
import EmptyCard from './EmptyCard';
import LineDot from './LineDot';
import ExpirienceCard from './ExpirienceCard';

const milestones = [
    {
        id: 1,
        date: 'MARCH 30, 2022',
        title: 'Chakra Hackathon',
        description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`,
    },
    {
        id: 2,
        date: 'July 30, 2021',
        title: 'Open Source, first contribution',
        description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`,
    },
    {
        id: 3,
        date: 'July 30, 2018',
        title: 'Freelancing, started working for myself',
        description:
            'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.',
    },
];

const Expirience: FC = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <chakra.div>
            <SecondaryHeader text='Moje skúsenosti' />
            <Container maxWidth='7xl' p={{ base: 2, sm: 10 }}>
                {milestones.map((milestone) => (
                    <Flex key={milestone.id} mb='10px'>
                        {isDesktop && milestone.id % 2 === 0 && (
                            <>
                                <EmptyCard />
                                <LineDot />
                                <ExpirienceCard {...milestone} />
                            </>
                        )}

                        {isMobile && (
                            <>
                                <LineDot />
                                <ExpirienceCard {...milestone} />
                            </>
                        )}

                        {isDesktop && milestone.id % 2 !== 0 && (
                            <>
                                <ExpirienceCard {...milestone} />

                                <LineDot />
                                <EmptyCard />
                            </>
                        )}
                    </Flex>
                ))}
            </Container>
        </chakra.div>
    );
};

export default Expirience;
