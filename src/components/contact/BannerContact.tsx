import {
    Box,
    Link,
    Stack,
    Text,
    chakra,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Mailto from '../shared/Mailto';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const BannerContact: FC = () => {
    const { t } = useTranslation();

    return (
        <chakra.div id='contact'>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                }}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={5}
                    alignItems={{ base: 'flex-start', md: 'center' }}
                    justifyContent='space-between'
                    rounded='lg'
                    boxShadow='md'
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    p={{ base: 8, md: 16 }}
                >
                    <Box>
                        <chakra.h1
                            fontSize='4xl'
                            lineHeight={1.2}
                            fontWeight='bold'
                        >
                            {t('description.contactHeader')}
                        </chakra.h1>
                        <chakra.h2
                            fontSize='2xl'
                            lineHeight={1.2}
                            fontWeight='bold'
                            mt={4}
                            bgGradient='linear(to-l, #0ea5e9,#2563eb)'
                            bgClip='text'
                        >
                            <Mailto
                                emailText={t('description.contactSecHeader')}
                                email={'pdinis1@gmail.com'}
                            />
                        </chakra.h2>
                    </Box>

                    <Box>
                        <Text
                            wordBreak={'break-all'}
                            lineHeight={1.2}
                            fontSize={'2xl'}
                            mt={10}
                        >
                            {t('description.email')}{' '}
                            <Mailto
                                emailText='pdinis1@gmail.com'
                                email={'pdinis1@gmail.com'}
                            />
                        </Text>

                        <Flex
                            alignItems='center'
                            wordBreak={'break-all'}
                            color={'orange.500'}
                            lineHeight={1.2}
                            fontSize={'2xl'}
                            mt={10}
                        >
                            {t('description.github')}
                            <Link href='https://github.com/peterdinis' ml={2}>
                                <FaGithub
                                    style={{
                                        display: 'inline',
                                        marginRight: '8px',
                                    }}
                                />
                                Github
                            </Link>
                        </Flex>

                        <Flex
                            alignItems='center'
                            wordBreak={'break-all'}
                            lineHeight={1.2}
                            color={'blue.400'}
                            fontSize={'2xl'}
                            mt={10}
                        >
                            {t('description.linkedIn')}
                            <Link
                                href='https://www.linkedin.com/in/peter-dinis-58520b214/'
                                ml={2}
                            >
                                <FaLinkedin
                                    style={{
                                        display: 'inline',
                                        marginRight: '8px',
                                    }}
                                />
                                LinkedIn
                            </Link>
                        </Flex>
                    </Box>
                </Stack>
            </motion.div>
        </chakra.div>
    );
};

export default BannerContact;
