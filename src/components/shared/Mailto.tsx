import { Link } from '@chakra-ui/react';
import type { FC, MouseEvent } from 'react';
import type { MailtoProps } from '../../interfaces/IShared';
import { MdEmail } from "react-icons/md";
import { createMailtoLink } from '../../utils/mailto';

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
        <Link
            marginTop={3}
            href={createMailtoLink(email, headers)}
            display='flex'
            alignItems='center'
            {...others}
        >
            <MdEmail className="email-icon" /> {emailText}
        </Link>
    );

    const renderObfuscatedLink = () => (
        <Link
            marginTop={3}
            onClick={handleClick}
            href='mailto:obfuscated'
            display='flex'
            alignItems='center'
            {...others}
        >
            <MdEmail className="email-icon" /> {emailText}
        </Link>
    );

    return obfuscate ? renderObfuscatedLink() : renderLink();
};

export default Mailto;
