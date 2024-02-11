import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    VStack,
    Text,
    Avatar,
    chakra,
    Box,
    ButtonGroup,
} from '@chakra-ui/react';
import { FC } from 'react';
import me from '../images/me.jpg';
import { useTranslation } from 'react-i18next';
import { ILanguage } from '../interfaces/Language';

const languages = {
    en: { nativeName: 'Anglická verzia' },
    sk: { nativeName: 'Slovenská verzia' },
} as ILanguage;

const Hero: FC = () => {
    return (
        <chakra.div id='me'>
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
                        Ahoj 👋 Vitaj na mojom portfóliu.
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
                    <Box mt={6} pt={3}>
                        <ButtonGroup>
                            <Button bg='orange.500'>Slovenská verzia</Button>
                            <Button bg='teal.500'>Anglická verzia</Button>
                        </ButtonGroup>
                    </Box>
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
        </chakra.div>
    );
};

export default Hero;
