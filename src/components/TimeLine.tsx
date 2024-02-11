import {
    Box,
    chakra,
    Container,
    Flex,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import { myExpirience } from './timeline/timeline';
import TimelineCard from './timeline/TimelineCard';

export const TimeLine = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container id="expirience" maxWidth='7xl' p={{ base: 2, sm: 10 }}>
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
                            <EmptyCard />
                            <LineWithDot />
                            <TimelineCard {...expirience} />
                        </>
                    )}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <TimelineCard {...expirience} />
                        </>
                    )}

                    {isDesktop && expirience.id % 2 !== 0 && (
                        <>
                            <TimelineCard {...expirience} />

                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos='relative'
            alignItems='center'
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position='absolute'
                left='50%'
                height='calc(100% + 10px)'
                border='1px solid'
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top='0px'
            ></chakra.span>
            <Box pos='relative' p='10px'>
                <Box
                    pos='absolute'
                    top='0'
                    left='0'
                    bottom='0'
                    right='0'
                    width='100%'
                    height='100%'
                    backgroundSize='cover'
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center center'
                    bg={useColorModeValue('gray.600', 'gray.200')}
                    borderRadius='100px'
                    backgroundImage='none'
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return (
        <Box
            flex={{ base: 0, md: 1 }}
            p={{ base: 0, md: 6 }}
            bg='transparent'
        ></Box>
    );
};
