import {
    chakra,
    Stack,
    useColorModeValue,
    Container,
    Box,
    Text,
    Link,
} from '@chakra-ui/react';
import { FC } from 'react';

export const ContactMe: FC = () => {
    return (
        <Container maxW='5xl' p='6'>
            <Banner />
        </Container>
    );
};

const Banner: FC = () => {
    return (
        <chakra.div id='contact'>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                alignItems={{ base: 'flex-start', md: 'center' }}
                justifyContent='space-between'
                rounded='lg'
                boxShadow='md'
                bg={useColorModeValue('gray.100', 'gray.700')}
                p={{ base: 8, md: 16 }}
            >
                <Box>
                    <chakra.h1
                        fontSize='4xl'
                        lineHeight={1.2}
                        fontWeight='bold'
                    >
                        Zaujala ťa moja tvorba ?
                    </chakra.h1>
                    <chakra.h2
                        fontSize='2xl'
                        lineHeight={1.2}
                        fontWeight='bold'
                        mt={4}
                        bgGradient='linear(to-l, #0ea5e9,#2563eb)'
                        bgClip='text'
                    >
                        Tak mi napíš 🖊️.
                    </chakra.h2>
                </Box>

                <Box>
                    <Text lineHeight={1.2} fontSize={'2xl'} mt={10}>
                        Môj email: pdinis1@gmail.com
                    </Text>

                    <Text
                        lineHeight={1.2}
                        color={'blue.400'}
                        fontSize={'2xl'}
                        mt={10}
                    >
                        Link na môj LinkedIn:{' '}
                        <Link href='https://www.linkedin.com/in/peter-dinis-58520b214/'>
                            Môj profil
                        </Link>
                    </Text>
                </Box>
            </Stack>
        </chakra.div>
    );
};
