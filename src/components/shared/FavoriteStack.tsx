import { FC } from 'react';
import { motion } from 'framer-motion';
import SecondaryHeader from './SecondaryHeader';
import { Box, Flex, Image } from '@chakra-ui/react';
import css from '../../images/css.png';
import express from '../../images/express.png';
import firebase from '../../images/firebase-new.png';
import html from '../../images/html.png';
import javascript from '../../images/javascript.png';
import jest from '../../images/jest.png';
import mysql from '../../images/mysql.png';
import nestjs from '../../images/nestjs.svg';
import net from '../../images/net.png';
import nextjs from '../../images/next-js.svg';
import pg from '../../images/pg.png';
import query from '../../images/query.svg';
import react from '../../images/react.png';
import typescript from '../../images/typescript.png';
import { useTranslation } from 'react-i18next';

const FavoriteStack: FC = () => {
    const imageVariants = {
        hover: { scale: 1.1 },
    };

    const {t} = useTranslation();

    return (
        <>
            <SecondaryHeader text={t("description.favoriteStack")} />
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
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image m={10} src={css} w={20} boxShadow={12} h={20} />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={express}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={firebase}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image m={10} src={html} w={20} boxShadow={12} h={20} />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={javascript}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image m={10} src={jest} w={20} boxShadow={12} h={20} />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={mysql}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={nestjs}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image m={10} src={net} w={20} boxShadow={12} h={20} />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={nextjs}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image m={10} src={pg} w={20} boxShadow={12} h={20} />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={query}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={react}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                        <Image
                            m={10}
                            src={typescript}
                            w={20}
                            boxShadow={12}
                            h={20}
                        />
                    </motion.div>
                </Flex>
            </Box>
        </>
    );
};

export default FavoriteStack;
