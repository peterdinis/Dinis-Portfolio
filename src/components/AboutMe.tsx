import { Box, Container, Flex, Text, chakra } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SecondaryHeader from "./shared/SecondaryHeader";

const AboutMe = () => {
	const { t } = useTranslation();

	return (
		<chakra.div id="about">
			<SecondaryHeader text={t("description.aboutMe")} />
			<Box>
				<Container
					maxW="7xl"
					mx="auto"
					px={{ base: "5", md: "10", lg: "20" }}
					py={{ base: "12", md: "16", lg: "24" }}
				>
					<Flex flexWrap="wrap" justify="center">
						<Box
							w="full"
							borderWidth="1px"
							rounded="3xl"
							overflow="hidden"
							borderColor="gray.500"
						/>
						<Box
							mt={{ base: "6", lg: "0" }}
							w="full"
							py={{ base: "6", lg: "0" }}
							pl={{ lg: "10" }}
						>
							<Text
								mb={{ base: "3", md: "4", lg: "6" }}
								fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
							>
								{t("description.firstSentence")}
							</Text>
							<Text
								mb={{ base: "3", md: "4", lg: "6" }}
								fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
							>
								{t("description.secondSentence")}
							</Text>
						</Box>
					</Flex>
				</Container>
			</Box>
		</chakra.div>
	);
};

export default AboutMe;
