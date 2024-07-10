import { Container } from "@chakra-ui/react";
import type { FC } from "react";
import BannerContact from "./BannerContact";

const ContactMe: FC = () => {
	return (
		<Container maxW="6xl" p="6" borderRadius={10}>
			<BannerContact />
		</Container>
	);
};

export default ContactMe;
