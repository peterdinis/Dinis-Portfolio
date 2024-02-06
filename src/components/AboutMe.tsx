import { Box, Container, Flex, chakra, Text } from '@chakra-ui/react';
import SecondaryHeader from './shared/SecondaryHeader';

const AboutMe = () => {
    return (
        <chakra.div id="about">
            <SecondaryHeader text='Pár informácií o mne' />
            <Box className='body-font overflow-hidden bg-white text-gray-700'>
                <Container maxW='7xl' mx='auto' px='5' py='24'>
                    <Flex flexWrap='wrap' justify='center'>
                        <Box
                            w='full'
                            borderWidth='1px'
                            rounded='3xl'
                            overflow='hidden'
                            borderColor='gray.500'
                        ></Box>
                        <Box
                            mt={{ base: '6', lg: '0' }}
                            w='full'
                            py={{ lg: '6' }}
                            pl={{ lg: '10' }}
                        >
                            <Text mb='3' fontSize='2xl'>
                                Ahoj. Volám sa Peter Dinis. Mám 23 rokov.
                                Pochádzam z Bardejova. Naštevoval som Strednú
                                priemyselnú školu technickú(SPŠT) v Bardejove.
                                Medzi moje záujmy patrí futbal, volejbal.
                            </Text>
                            <Text mb='3' fontSize='2xl'>
                                Najväčšie skúsenosti mám z technológiami: React
                                Nestjs a Typescript Node.
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </chakra.div>
    );
};

export default AboutMe;
