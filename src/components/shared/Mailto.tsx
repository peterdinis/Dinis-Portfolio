import { MouseEvent, FC } from 'react';

interface MailtoProps {
    emailText: string;
    email: string;
    headers?: Record<string, string>;
    obfuscate?: boolean;
}

const toSearchString = (searchParams: Record<string, string> = {}): string => {
    return Object.keys(searchParams)
        .map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
        .join('&');
};

const createMailtoLink = (
    email: string,
    headers?: Record<string, string>
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
        <a href={createMailtoLink(email, headers)} {...others}>
            {emailText}
        </a>
    );

    const renderObfuscatedLink = () => (
        <a onClick={handleClick} href='mailto:obfuscated' {...others}>
            {emailText}
        </a>
    );

    return obfuscate ? renderObfuscatedLink() : renderLink();
};

export default Mailto;
