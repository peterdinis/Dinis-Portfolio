"use client";

import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import type { FC } from "react";

const NotFoundWrapper: FC = () => {
	return (
		<>
			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						Requested page does <br />
						<Text as={"span"} color={"green.400"}>
							Not Exists
						</Text>
					</Heading>
					<Button>
						<a href="/">Go back to main page</a>
					</Button>
				</Stack>
			</Container>
		</>
	);
};

export default NotFoundWrapper;
