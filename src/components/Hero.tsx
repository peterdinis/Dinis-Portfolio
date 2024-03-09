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
    useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import me from '../images/me.jpg';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import { languages } from '../utils/languages';

const Hero: FC = () => {
    const { i18n, t } = useTranslation();

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <chakra.div id='me'>
            {!isMobile && (
                <VStack
                    m='auto'
                    my={{ base: 4, md: 10 }}
                    mt={{ base: 4, md: 10 }}
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
                            borderWidth='2px'
                            px={{ base: 4, md: 8 }}
                            py={{ base: 2, md: 4 }}
                        >
                            {t('description.welcome')}
                        </Button>
                    </Link>
                </VStack>
            )}
            <Flex
                flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
                justify='space-between'
                direction={{
                    base: 'column-reverse',
                    md: 'row',
                    sm: 'column-reverse',
                    xs: 'column-reverse',
                }}
            >
                <Stack mt={isMobile ? { base: 36, md: 4 } : { base: 0, md: 0 }}>
                    <Heading
                        fontSize={{
                            base: '4xl',
                            md: '6xl',
                            lg: '6xl',
                        }}
                        fontWeight='extrabold'
                    >
                        <Stack display='flex' direction='row'>
                            <Text
                                bgGradient='linear(to-tr, teal.500, teal.800)'
                                bgClip='text'
                                fontSize={{ base: 32, md: 63 }}
                                wordBreak={'break-all'}
                            >
                                <Typewriter
                                    loop={false}
                                    typeSpeed={130}
                                    words={[
                                        'Peter Dinis Junior Fullstack Developer',
                                    ]}
                                />
                            </Text>
                        </Stack>
                    </Heading>
                    <Box mt={{ base: 4, md: 6 }}>
                        <ButtonGroup spacing={2}>
                            {Object.keys(languages).map((lng) => (
                                <Button
                                    bg={'teal.500'}
                                    _hover={{ bg: 'teal.500' }}
                                    key={lng}
                                    style={{
                                        fontWeight:
                                            i18n.resolvedLanguage === lng
                                                ? 'bold'
                                                : 'normal',
                                    }}
                                    type='submit'
                                    onClick={() => {
                                        i18n.changeLanguage(lng);
                                    }}
                                >
                                    <p>{languages[lng].nativeName}</p>
                                </Button>
                            ))}
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
                            boxSize={{
                                base: '110px',
                                md: '200px',
                                lg: '250px',
                            }}
                            src={me}
                            zIndex={1}
                            mt={
                                isMobile
                                    ? { base: 36, md: 4 }
                                    : { base: 0, md: 0 }
                            }
                        />
                    </Text>
                </Stack>
            </Flex>
        </chakra.div>
    );
};

export default Hero;
