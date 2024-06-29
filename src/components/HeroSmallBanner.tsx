import { Button, Box, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const HeroSmallBanner: FC = () => {
	const { t } = useTranslation();
	return (
		<VStack
			m="auto"
			my={{ base: 4, md: 10 }}
			mt={{ base: 4, md: 10 }}
			zIndex="100"
		>
			<Box
				textDecoration="none"
				style={{ textDecoration: "none" }}
			>
				<Button
					borderRadius="full"
					borderColor="blue.600"
					borderWidth="2px"
					px={{ base: 4, md: 8 }}
					py={{ base: 2, md: 4 }}
				>
					{t("description.welcome")}
				</Button>
			</Box>
		</VStack>
	);
};

export default HeroSmallBanner;
