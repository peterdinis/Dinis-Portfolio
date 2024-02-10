import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    VStack,
    Text,
    Avatar,
} from '@chakra-ui/react';
import { FC } from 'react';
import me from "../images/me.jpg"

const Hero: FC = () => {
    return (
        <>
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
                        Ahoj 👋 Vitaj na mojom portfóliu
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
                            <Text
                                bgGradient='linear(to-tr, teal.500, teal.800)'
                                bgClip='text'
                                fontSize={63}
                            >
                                Peter Dinis
                            </Text>
                        </Stack>
                        <Stack display='flex' direction='row'>
                            <Text fontSize={63} colorScheme='black'>
                                fullstack
                            </Text>
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
                        Vytváram a navrhnuem{' '}
                        <span
                            style={{
                                color: 'var(--chakra-colors-teal-800)',
                                fontWeight: 800,
                            }}
                        >
                            webstránky
                        </span>{' '}
                        z dôrazom na kvalitu a{' '}
                        <span
                            style={{
                                color: 'var(--chakra-colors-teal-800)',
                                fontWeight: 800,
                            }}
                        >
                            používateľskú skúsenosť
                        </span>{' '}
                    </Text>
                </Stack>
                <Stack>
                    <Text color='white'>
                        <Avatar
                            alignSelf='center'
                            borderRadius='full'
                            backgroundColor='transparent'
                            boxShadow='lg'
                            boxSize='300px'
                            src={me}
                            zIndex={1}
                        />
                    </Text>
                </Stack>
            </Flex>
        </>
    );
};

export default Hero;
