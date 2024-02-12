import { chakra, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import { myExpirience } from './timeline';
import TimelineCard from './TimelineCard';
import EmptyTimelineCard from './EmptyTimelineCard';
import TimelineDot from './TimelineDot';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ExpirienceTimeline: FC = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { t } = useTranslation();

    return (
        <Container id='expirience' maxWidth='7xl' p={{ base: 2, sm: 10 }}>
            <chakra.h3
                fontSize='4xl'
                fontWeight='bold'
                mb={18}
                textAlign='center'
            >
                {t("description.expirienceHeader")}
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

export default ExpirienceTimeline;
