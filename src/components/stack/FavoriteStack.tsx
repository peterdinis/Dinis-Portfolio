import { Box, Flex, useColorMode } from "@chakra-ui/react";
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
import SecondaryHeader from "../shared/SecondaryHeader";
import StackImage from "./StackImage";

const FavoriteStack: FC = () => {
	const { colorMode } = useColorMode();

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
					<StackImage imageSrc={css} altSrc="css" />
					<StackImage imageSrc={graphql} altSrc="graphql" />
					<StackImage imageSrc={csharp} altSrc="csharp" />
					<StackImage imageSrc={figma} altSrc="figma" />
					<StackImage imageSrc={tailwind} altSrc="tailwind" />
					<StackImage imageSrc={mongo} altSrc="mongodb" />
					<StackImage imageSrc={linux} altSrc="linux" />
					<StackImage imageSrc={express} altSrc="express" />
					<StackImage imageSrc={firebase} altSrc="firebase" />
					<StackImage imageSrc={html} altSrc="html" />
					<StackImage imageSrc={javascript} altSrc="javascript" />
					<StackImage imageSrc={jest} altSrc="jest" />
					<StackImage imageSrc={mysql} altSrc="mysql" />
					<StackImage imageSrc={nestjs} altSrc="nestjs" />
					<StackImage imageSrc={net} altSrc="asp.net" />
					<StackImage imageSrc={nextjs} altSrc="nextjs" />
					<StackImage imageSrc={pg} altSrc="postgresql" />
					<StackImage imageSrc={query} altSrc="tanstack-query" />
					<StackImage imageSrc={react} altSrc="react" />
					<StackImage imageSrc={typescript} altSrc="typescript" />
				</Flex>
			</Box>
		</>
	);
};

export default FavoriteStack;
