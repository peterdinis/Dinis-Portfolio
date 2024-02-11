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
import { useTranslation } from 'react-i18next';
import Mailto from '../shared/Mailto';

export const ContactMe: FC = () => {
    return (
        <Container maxW='5xl' p='6'>
            <Banner />
        </Container>
    );
};

const Banner: FC = () => {
    const {t} = useTranslation();

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
                        {t("description.contactHeader")}
                    </chakra.h1>
                    <chakra.h2
                        fontSize='2xl'
                        lineHeight={1.2}
                        fontWeight='bold'
                        mt={4}
                        bgGradient='linear(to-l, #0ea5e9,#2563eb)'
                        bgClip='text'
                    >
                        {t("description.contactSecHeader")}
                    </chakra.h2>
                </Box>

                <Box>
                    <Text lineHeight={1.2} fontSize={'2xl'} mt={10}>
                       {t("description.email")} <Mailto email={'pdinis1@gmail.com'} />
                    </Text>
                    <Text
                        color={'orange.500'}
                        lineHeight={1.2}
                        fontSize={'2xl'}
                        mt={10}
                    >
                        {t("description.github")}:{' '}
                        <Link href='https://github.com/peterdinis'>Github</Link>
                    </Text>
                    <Text
                        lineHeight={1.2}
                        color={'blue.400'}
                        fontSize={'2xl'}
                        mt={10}
                    >
                        {t("description.linkedIn")}:{' '}
                        <Link href='https://www.linkedin.com/in/peter-dinis-58520b214/'>
                            LinkedIn
                        </Link>
                    </Text>
                </Box>
            </Stack>
        </chakra.div>
    );
};
