import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { UnderlinedTextProps } from "../../interfaces/IShared";

const UnderlinedText = (props: PropsWithChildren<UnderlinedTextProps>) => (
	<Box as="span" display="inline-block" position="relative">
		{props.children}
		<Box
			as="span"
			display="block"
			position="absolute"
			bg={props.color || "gray.200"}
			w="100%"
			h={props.h || "1px"}
			bottom={-2}
		/>
	</Box>
);

export default UnderlinedText