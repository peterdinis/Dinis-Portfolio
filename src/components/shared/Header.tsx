import { Box } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import type { HeaderProps } from '../../interfaces/IShared';
import UnderlinedText from './UnderlinedText';

const Header = ({
    children,
    underlineColor,
    ...props
}: PropsWithChildren<HeaderProps>) => (
    <Box
        as='h1'
        mt={10}
        mb={6}
        fontSize='3xl'
        lineHeight='shorter'
        fontWeight='bold'
        {...props}
        textAlign='left'
    >
        <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    </Box>
);

export default Header;
