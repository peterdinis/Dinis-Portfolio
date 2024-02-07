import {
    Box,
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    VStack,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <Box
            px={{ base: '6', md: '6', lg: '20', sm: '10', xl: '28' }}
            pb='0'
            mx='auto'
            maxW='1536'
            pt={{ base: '8', sm: '16', md: '20' }}
        >
            <VStack
                m='auto'
                my='10'
                mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: '4em' }}
                zIndex='100'
            >
                <Link
                    href='https://github.com/peterdinis'
                    textDecoration='none'
                    isExternal={true}
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        borderRadius='full'
                        borderColor='blue.600'
                        h='30px'
                        borderWidth='2px'
                    >
                        Hi 👋 Welcome to my portfolio
                    </Button>
                </Link>
            </VStack>
            <Flex
                flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
                justify='space-between'
                direction={{
                    base: 'row',
                    md: 'row',
                    sm: 'column-reverse',
                    xs: 'column-reverse',
                }}
            >
                <Stack>
                    <Heading
                        fontSize={{
                            md: '6xl',
                            lg: '6xl',
                            sm: '4xl',
                            xs: '3xl',
                        }}
                        fontWeight='extrabold'
                    >
                        <Stack display='flex' direction='row'>
                            <Text fontSize={63} colorScheme='black'>I&apos;m</Text>
                            <Text
                                bgGradient='linear(to-tr, teal.500, teal.800)'
                                bgClip='text'
                                fontSize={63}
                            >
                                Peter Dinis
                            </Text>
                        </Stack>
                        <Stack display='flex' direction='row'>
                            <Text fontSize={63} colorScheme='black'>fullstack</Text>
                            <Text
                            fontSize={63}
                                bgGradient='linear(to-tr, teal.500, teal.800)'
                                bgClip='text'
                            >
                                developer
                            </Text>
                        </Stack>
                    </Heading>
                    <Text py='5' colorScheme='black' fontWeight='400'>
                        I design and create{' '}
                        <span
                            style={{
                                color: 'var(--chakra-colors-teal-800)',
                                fontWeight: 800,
                            }}
                        >
                            functional and beautiful applications
                        </span>{' '}
                        with passion and a focus on{' '}
                        <span
                            style={{
                                color: 'var(--chakra-colors-teal-800)',
                                fontWeight: 800,
                            }}
                        >
                            user experience
                        </span>{' '}
                        and{' '}
                        <span
                            style={{
                                color: 'var(--chakra-colors-teal-500)',
                                fontWeight: 500,
                            }}
                        >
                            high quality.
                        </span>{' '}
                    </Text>
                </Stack>
                <Stack>
                    <Text color="white">abaaa</Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Hero;
