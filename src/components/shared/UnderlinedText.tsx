import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import type { UnderlinedTextProps } from "../../interfaces/IShared";

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

export default UnderlinedText;
