import {
    Box,
    Button,
    Container,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import type { FC } from 'react';
import Navbar from './Navbar';

const NotFoundWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Requested page does <br />
                        <Text as={'span'} color={'green.400'}>
                            not exists
                        </Text>
                    </Heading>
                    <Button>
                        <Link href='/'>Go home</Link>
                    </Button>
                </Stack>
            </Container>
        </>
    );
};

export default NotFoundWrapper;
