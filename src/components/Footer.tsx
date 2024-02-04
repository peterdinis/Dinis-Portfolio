import { Stack, Text, Container } from '@chakra-ui/react';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <Stack
            maxW='5xl'
            marginInline='auto'
            p={8}
            spacing={{ base: 8, md: 0 }}
            justifyContent='space-between'
            alignItems='center'
            direction={{ base: 'column', md: 'row' }}
        >
            <Container flex={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={40}>&copy; Peter Dinis 2024</Text>
            </Container>
        </Stack>
    );
};

export default Footer;
