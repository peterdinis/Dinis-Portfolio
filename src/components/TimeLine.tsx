import { chakra, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import { myExpirience } from './timeline/timeline';
import TimelineCard from './timeline/TimelineCard';
import EmptyTimelineCard from './timeline/EmptyTimelineCard';
import TimelineDot from './timeline/TimelineDot';

export const TimeLine = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container id='expirience' maxWidth='7xl' p={{ base: 2, sm: 10 }}>
            <chakra.h3
                fontSize='4xl'
                fontWeight='bold'
                mb={18}
                textAlign='center'
            >
                Moje skúsenosti
            </chakra.h3>
            {myExpirience.map((expirience) => (
                <Flex key={expirience.id} mb='10px'>
                    {isDesktop && expirience.id % 2 === 0 && (
                        <>
                            <EmptyTimelineCard />
                            <TimelineDot />
                            <TimelineCard {...expirience} />
                        </>
                    )}
                    {isMobile && (
                        <>
                            <TimelineDot />
                            <TimelineCard {...expirience} />
                        </>
                    )}

                    {isDesktop && expirience.id % 2 !== 0 && (
                        <>
                            <TimelineCard {...expirience} />

                            <TimelineDot />
                            <EmptyTimelineCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};
