import { Link } from "@chakra-ui/react";
import type { FC, MouseEvent } from "react";
import type { MailtoProps } from "../../interfaces/IShared";

const toSearchString = (searchParams: Record<string, string> = {}): string => {
	return Object.keys(searchParams)
		.map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
		.join("&");
};

const createMailtoLink = (
	email: string,
	headers?: Record<string, string>,
): string => {
	let link = `mailto:${email}`;
	if (headers) {
		link += `?${toSearchString(headers)}`;
	}
	return link;
};

const Mailto: FC<MailtoProps> = ({
	email,
	obfuscate,
	emailText,
	headers,
	...others
}) => {
	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		window.location.href = createMailtoLink(email, headers);
	};

	const renderLink = () => (
		<Link href={createMailtoLink(email, headers)} {...others}>
			{emailText}
		</Link>
	);

	const renderObfuscatedLink = () => (
		<Link onClick={handleClick} href="mailto:obfuscated" {...others}>
			{emailText}
		</Link>
	);

	return obfuscate ? renderObfuscatedLink() : renderLink();
};

export default Mailto;
