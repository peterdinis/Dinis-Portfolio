import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import Header from './shared/Header';
import { MotionBox, MotionFlex } from './utils/motion';

const ANIMATION_DURATION = 0.5;

const Hero = () => {
    const color = 'blue.400';

    return (
        <Container maxW='5xl' p={{ base: 5, md: 12 }} id='me'>
            <Flex direction={['column', 'column', 'row']}>
                <MotionBox
                    opacity='0'
                    initial={{
                        translateX: -150,
                        opacity: 0,
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                        transition: {
                            duration: ANIMATION_DURATION,
                        },
                    }}
                    m='auto'
                    mb={[16, 16, 'auto']}
                >
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                        rounded='full'
                        shadow='lg'
                    >
                        <Avatar
                            size='2xl'
                            showBorder={true}
                            borderColor={color}
                            src={
                                'https://media.licdn.com/dms/image/C4E03AQE9payLpbABCg/profile-displayphoto-shrink_800_800/0/1622796244091?e=2147483647&v=beta&t=BA-4vv7rc_XfzSz9YcKOXxrX7VlIJw_pNwJzkb1A38o'
                            }
                        />
                    </MotionBox>
                </MotionBox>
                <MotionFlex
                    position='relative'
                    ml={['auto', 'auto', 16]}
                    m={['auto', 'initial']}
                    w={['90%', '85%', '80%']}
                    maxW='800px'
                    opacity='0'
                    justifyContent='center'
                    direction='column'
                    initial={{
                        opacity: 0,
                        translateX: 150,
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            duration: ANIMATION_DURATION,
                        },
                    }}
                >
                    <Box position='relative'>
                        <MotionBox
                            whileHover={{ translateY: -5 }}
                            width='max-content'
                        >
                            <Header
                                underlineColor={color}
                                mt={0}
                                cursor='pointer'
                                width='max-content'
                            >
                                Ahoj👋
                            </Header>
                        </MotionBox>
                    </Box>
                    <Box
                        as='h2'
                        fontSize='2xl'
                        fontWeight='400'
                        textAlign='left'
                    >
                        Moje meno je{' '}
                        <Box as='strong' fontWeight='600'>
                            Peter Dinis
                        </Box>{' '}
                        a som{' '}
                        <Box as='span' whiteSpace='nowrap'>
                             {" "} Full Stack Developer
                        </Box>{' '}
                        <Box as='span' whiteSpace='nowrap'>
                            z Bardejova.&nbsp;
                        </Box>
                    </Box>
                    <Box
                        as='h2'
                        fontSize='2xl'
                        fontWeight='400'
                        mt={5}
                        textAlign='left'
                    >
                        Vitaj na mojom portfóliu🤗
                    </Box>
                </MotionFlex>
            </Flex>
        </Container>
    );
};

export default Hero;
