import { FC } from 'react';
import SecondaryHeader from './SecondaryHeader';
import { Box, Flex } from '@chakra-ui/react';

const FavoriteStack: FC = () => {
    return (
        <>
            <SecondaryHeader text='Môj oblubený tech stack' />
            <Box
                boxShadow='2xl'
                borderRadius='3xl'
                my='10'
                bgColor='white'
                id='skills-wrapper'
            >
                <Flex
                    gap={{ base: 16, lg: 16, md: 16, sm: 14, xs: 10 }}
                    wrap='wrap'
                    p={{ base: 10, lg: 10, md: 10, sm: 10, xs: 0 }}
                    pt={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
                    pb={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
                    my={{ base: 0, lg: 0, md: 0, sm: 4, xs: 10 }}
                    alignItems='center'
                    justify='center'
                >
                    iiii
                </Flex>
            </Box>
        </>
    );
};

export default FavoriteStack;
