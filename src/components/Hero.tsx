import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Stack,
	Text,
	chakra,
	useBreakpointValue,
} from "@chakra-ui/react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import me from "../images/me.jpg";
import { languages } from "../utils/languages";
import HeroSmallBanner from "./HeroSmallBanner";

const Hero: FC = () => {
	const { i18n } = useTranslation();

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<chakra.div id="me">
			{!isMobile && <HeroSmallBanner />}
			<Flex
				flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
				justify="space-between"
				direction={{
					base: "column-reverse",
					md: "row",
					sm: "column-reverse",
					xs: "column-reverse",
				}}
			>
				<Stack mt={isMobile ? { base: 36, md: 4 } : { base: 0, md: 0 }}>
					<Heading
						fontSize={{
							base: "4xl",
							md: "6xl",
							lg: "6xl",
						}}
						fontWeight="extrabold"
					>
						<Stack display="flex" direction="row">
							<Text
								bgGradient="linear(to-tr, teal.500, teal.800)"
								bgClip="text"
								fontSize={{ base: 32, md: 63 }}
								wordBreak={"break-all"}
							>
								<Typewriter
									loop={false}
									typeSpeed={130}
									words={["Peter Dinis. Fullstack Developer"]}
								/>
							</Text>
						</Stack>
					</Heading>
					<Box mt={{ base: 4, md: 6 }}>
						<ButtonGroup spacing={2}>
							{Object.keys(languages).map((lng) => (
								<Button
									bg={"teal.700"}
									_hover={{ bg: "teal.700" }}
									key={lng}
									style={{
										fontWeight:
											i18n.resolvedLanguage === lng
												? "bold"
												: "normal",
									}}
									type="submit"
									onClick={() => {
										i18n.changeLanguage(lng);
									}}
								>
									<Text>{languages[lng].nativeName}</Text>
								</Button>
							))}
						</ButtonGroup>
					</Box>
				</Stack>
				<Stack>
					<Text color="white">
						<Avatar
							alignSelf="center"
							borderRadius="full"
							backgroundColor="transparent"
							boxShadow="lg"
							boxSize={{
								base: "110px",
								md: "200px",
								lg: "250px",
							}}
							src={me}
							zIndex={1}
							mt={
								isMobile
									? { base: 36, md: 4 }
									: { base: 0, md: 0 }
							}
						/>
					</Text>
				</Stack>
			</Flex>
		</chakra.div>
	);
};

export default Hero;
