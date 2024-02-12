import { Box, Container, Flex, chakra, Text } from '@chakra-ui/react';
import SecondaryHeader from './shared/SecondaryHeader';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <chakra.div id='about'>
            <SecondaryHeader text={t('description.aboutMe')} />
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
                                {t('description.firstSentence')}
                            </Text>
                            <Text mb='3' fontSize='2xl'>
                                {t('description.secondSentence')}
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </chakra.div>
    );
};

export default AboutMe;
