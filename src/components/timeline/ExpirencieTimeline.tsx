import {
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AddIcon, ChatIcon, CheckIcon, DownloadIcon } from '@chakra-ui/icons';

const ExpirienceTimeline: FC = () => {
    const { t } = useTranslation();
    const textColor = useColorModeValue('gray.700', 'white.300');
    return (
        <Container id='expirience' maxWidth='7xl' p={{ base: 2, sm: 10 }}>
            <chakra.h3
                fontSize='4xl'
                fontWeight='bold'
                mb={18}
                textAlign='center'
            >
                {t('description.expirienceHeader')}
            </chakra.h3>
            <Box
                display='flex'
                flexDirection='column'
                width='100%'
                position='relative'
                minWidth='0px'
                backgroundClip='border-box'
                boxShadow='0px 3.5px 5.5px rgba(0, 0, 0, 0.02)'
                borderRadius='15px'
                p='1rem'
                maxHeight='100%'
            >
                <Box
                    display='flex'
                    width='100%'
                    pt='28px'
                    px='21px'
                    p='28px 0px 35px 21px'
                >
                    <Flex direction='column'>
                        <Text
                            fontSize='lg'
                            color={textColor}
                            fontWeight='bold'
                            pb='.5rem'
                        >
                            Orders overview
                        </Text>
                        <Text
                            fontSize='sm'
                            color='gray.400'
                            fontWeight='normal'
                        >
                            <Text fontWeight='bold' as='span' color='teal.300'>
                                +30%
                            </Text>{' '}
                            this month.
                        </Text>
                    </Flex>
                </Box>
                <Box
                    width='100%'
                    px='21px'
                    ps='26px'
                    pe='0px'
                    mb='31px'
                    position='relative'
                >
                    <Flex direction='column'>
                        <Flex
                            alignItems='center'
                            minH='78px'
                            h='78px'
                            justifyContent='start'
                            mb='5px'
                        >
                            <Flex direction='column' h='100%'>
                                <AddIcon
                                    color='teal.300'
                                    h={'30px'}
                                    w={'26px'}
                                    pr='6px'
                                    zIndex='1'
                                    position='relative'
                                    left='-8px'
                                />
                                <Box w='2px' bg='gray.200' h='100%'></Box>
                            </Flex>
                            <Flex
                                direction='column'
                                justifyContent='flex-start'
                                h='100%'
                            >
                                <Text
                                    fontSize='sm'
                                    color={textColor}
                                    fontWeight='bold'
                                >
                                    $2400, Design changes
                                </Text>
                                <Text
                                    fontSize='sm'
                                    color='gray.400'
                                    fontWeight='normal'
                                >
                                    22 DEC 7:20 PM
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            alignItems='center'
                            minH='78px'
                            h='78px'
                            justifyContent='start'
                            mb='5px'
                        >
                            <Flex direction='column' h='100%'>
                                <ChatIcon
                                    color='blue.300'
                                    h={'30px'}
                                    w={'26px'}
                                    pr='6px'
                                    zIndex='1'
                                    position='relative'
                                    left='-8px'
                                />
                                <Box w='2px' bg='gray.200' h='100%'></Box>
                            </Flex>
                            <Flex
                                direction='column'
                                justifyContent='flex-start'
                                h='100%'
                            >
                                <Text
                                    fontSize='sm'
                                    color={textColor}
                                    fontWeight='bold'
                                >
                                    New order #4219423
                                </Text>
                                <Text
                                    fontSize='sm'
                                    color='gray.400'
                                    fontWeight='normal'
                                >
                                    21 DEC 11:21 PM
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            alignItems='center'
                            minH='78px'
                            h='78px'
                            justifyContent='start'
                            mb='5px'
                        >
                            <Flex direction='column' h='100%'>
                                <Icon
                                    as={DownloadIcon}
                                    color='orange.300'
                                    h={'30px'}
                                    w={'26px'}
                                    pr='6px'
                                    zIndex='1'
                                    position='relative'
                                    left='-8px'
                                />
                                <Box w='2px' bg='gray.200' h='100%'></Box>
                            </Flex>
                            <Flex
                                direction='column'
                                justifyContent='flex-start'
                                h='100%'
                            >
                                <Text
                                    fontSize='sm'
                                    color={textColor}
                                    fontWeight='bold'
                                >
                                    Server Payments for April
                                </Text>
                                <Text
                                    fontSize='sm'
                                    color='gray.400'
                                    fontWeight='normal'
                                >
                                    21 DEC 9:28 PM
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            alignItems='center'
                            minH='78px'
                            h='78px'
                            justifyContent='start'
                            mb='5px'
                        >
                            <Flex direction='column' h='100%'>
                                <CheckIcon
                                    color='red.300'
                                    h={'30px'}
                                    w={'26px'}
                                    pr='6px'
                                    zIndex='1'
                                    position='relative'
                                    left='-8px'
                                />
                                <Box w='2px' bg='gray.200' h='15px'></Box>
                            </Flex>
                            <Flex
                                direction='column'
                                justifyContent='flex-start'
                                h='100%'
                            >
                                <Text
                                    fontSize='sm'
                                    color={textColor}
                                    fontWeight='bold'
                                >
                                    New card added for order #3210145
                                </Text>
                                <Text
                                    fontSize='sm'
                                    color='gray.400'
                                    fontWeight='normal'
                                >
                                    20 DEC 3:52 PM
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
};

export default ExpirienceTimeline;
