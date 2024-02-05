import { Flex, chakra, Box, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const LineDot: FC = () => {
    return (
        <Flex
        pos='relative'
        alignItems='center'
        mr={{ base: '40px', md: '40px' }}
        ml={{ base: '0', md: '40px' }}
    >
        <chakra.span
            position='absolute'
            left='50%'
            height='calc(100% + 10px)'
            border='1px solid'
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            top='0px'
        ></chakra.span>
        <Box pos='relative' p='10px'>
            <Box
                pos='absolute'
                top='0'
                left='0'
                bottom='0'
                right='0'
                width='100%'
                height='100%'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                backgroundPosition='center center'
                bg={useColorModeValue('gray.600', 'gray.200')}
                borderRadius='100px'
                backgroundImage='none'
                opacity={1}
            ></Box>
        </Box>
    </Flex>
    )
}

export default LineDot;