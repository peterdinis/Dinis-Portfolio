import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import graphql from "../../images/GraphQL.png";
import csharp from "../../images/csharp.png";
import css from "../../images/css.png";
import express from "../../images/express-new.png";
import figma from "../../images/figma-new.png";
import firebase from "../../images/firebase-new.png";
import html from "../../images/html.png";
import javascript from "../../images/javascript.png";
import jest from "../../images/jest-new.png";
import linux from "../../images/linux-new.png";
import mongo from "../../images/mongo.png";
import mysql from "../../images/mysql.png";
import nestjs from "../../images/nestjs.svg";
import net from "../../images/net-new.png";
import nextjs from "../../images/next-js.svg";
import pg from "../../images/pg.png";
import query from "../../images/query.svg";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind-new.png";
import typescript from "../../images/typescript-new.png";
import SecondaryHeader from "./SecondaryHeader";

const FavoriteStack: FC = () => {
	const { colorMode } = useColorMode();
	const imageVariants = {
		hover: { scale: 1.1 },
	};

	const { t } = useTranslation();

	return (
		<>
			<SecondaryHeader text={t("description.favoriteStack")} />
			<Box
				boxShadow="2xl"
				borderRadius="3xl"
				my="10"
				bgColor={colorMode === "light" ? "white" : "gray.700"}
				id="skills-wrapper"
			>
				<Flex
					gap={{ base: 16, lg: 16, md: 16, sm: 14, xs: 10 }}
					wrap="wrap"
					p={{ base: 10, lg: 10, md: 10, sm: 10, xs: 0 }}
					pt={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
					pb={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
					my={{ base: 0, lg: 0, md: 0, sm: 4, xs: 10 }}
					alignItems="center"
					justify="center"
				>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="css"
							m={10}
							src={css}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							m={10}
							src={graphql}
							w={20}
							boxShadow={12}
							h={20}
							alt="graphql"
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="csharp"
							m={10}
							src={csharp}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="figma"
							m={10}
							src={figma}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="tailwind"
							m={10}
							src={tailwind}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="mongodb"
							m={10}
							src={mongo}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="linux"
							m={10}
							src={linux}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="express"
							m={10}
							src={express}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="firebase"
							m={10}
							src={firebase}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="html"
							m={10}
							src={html}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="javascript"
							m={10}
							src={javascript}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="jest"
							m={10}
							src={jest}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="mysql"
							m={10}
							src={mysql}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="nestjs"
							m={10}
							src={nestjs}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="aspnet"
							m={10}
							src={net}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="nextjs"
							m={10}
							src={nextjs}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="postgresql"
							m={10}
							src={pg}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="react-query"
							m={10}
							src={query}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="react"
							m={10}
							src={react}
							w={20}
							boxShadow={12}
							h={20}
						/>
					</motion.div>
					<motion.div variants={imageVariants} whileHover="hover">
						<Image
							alt="typescript"
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
