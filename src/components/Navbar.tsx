import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	Link,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	useMediaQuery,
} from "@chakra-ui/react";
import{HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar: FC = () => {
	const [scroll] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { t } = useTranslation();
	const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

	const scrollMe = () => {
		const heroSection = document.querySelector(
			"#me",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	const expirienceScoll = () => {
		const heroSection = document.querySelector(
			"#expirience",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	const projectsScroll = () => {
		const heroSection = document.querySelector(
			"#projects",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	const contactsScroll = () => {
		const heroSection = document.querySelector(
			"#contact",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Flex
			bg={useColorModeValue("gray.100", "gray.900")}
			px={4}
			h={16}
			boxShadow={scroll ? "base" : "none"}
			zIndex="sticky"
			position="fixed"
			as="header"
			alignItems={"center"}
			justifyContent={"space-between"}
			w="100%"
		>
			<Link>
				<HStack>
					<Text fontWeight={"bold"}>Peter Dinis</Text>
				</HStack>
			</Link>

			<Flex alignItems={"center"}>
				<Stack direction={"row"} spacing={7}>
					{isLargerThanMD ? (
						<>
							<Button onClick={scrollMe} variant="ghost">
								{t("description.oMne")}
							</Button>
							<Button onClick={expirienceScoll} variant="ghost">
								{t("description.skusenosti")}
							</Button>
							<Button onClick={projectsScroll} variant="ghost">
								{t("description.projekty")}
							</Button>
							<Button onClick={contactsScroll} variant="ghost">
								{t("description.kontakt")}
							</Button>
						</>
					) : (
						<></>
					)}
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <MoonIcon fontSize={20} /> : <SunIcon fontSize={20} />}
					</Button>

					{isLargerThanMD ? (
						<></>
					) : (
						<>
							<Button
								as={IconButton}
								icon={<HamburgerIcon fontSize={20} />}
								onClick={onOpen}
							></Button>
							<Drawer
								placement="top"
								onClose={onClose}
								isOpen={isOpen}
							>
								<DrawerOverlay />
								<DrawerContent>
									<DrawerBody>
										<Button
											onClick={scrollMe}
											variant="ghost"
										>
											{t("description.oMne")}
										</Button>
										<Button
											onClick={expirienceScoll}
											variant="ghost"
										>
											{t("description.skusenosti")}
										</Button>
										<Button
											onClick={projectsScroll}
											variant="ghost"
										>
											{t("description.projekty")}
										</Button>
										<Button
											onClick={contactsScroll}
											variant="ghost"
										>
											{t("description.kontakt")}
										</Button>
									</DrawerBody>
								</DrawerContent>
							</Drawer>
						</>
					)}
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Navbar;
