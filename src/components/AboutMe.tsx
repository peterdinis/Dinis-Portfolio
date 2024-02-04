import { FC } from 'react';
import SecondaryHeader from './shared/SecondaryHeader';
import {
    Text,
    Container,
    Stack,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';

const AboutMe: FC = () => {
    return (
        <>
            <SecondaryHeader text='Pár informácií o mne' />
            <Container maxW='5xl' p={{ base: 10, md: 14 }}>
                <VStack
                    spacing={3}
                    p={4}
                    border='3px solid'
                    borderColor='teal.700'
                    maxW='xl'
                    margin='0 auto'
                    boxShadow='lg'
                    pos='relative'
                >
                    <Stack direction={'column'}>
                        <Text fontStyle={'italic'} fontWeight={'bold'}>
                            Ahoj. Volám sa Peter Dinis. Mám 22 rokov. Pochádzam
                            z Bardejova. Naštevoval som Strednú priemyselnú
                            školu technickú(SPŠT) v Bardejove. Medzi moje záujmy
                            patrí futbal, volejbal. Najväčšie skúsenosti mám z
                            technológiami: React Nestjs a Typescript Node.
                        </Text>
                    </Stack>
                </VStack>
            </Container>
        </>
    );
};

export default AboutMe;
