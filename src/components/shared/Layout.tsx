import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import AnimationWrapper from './AnimationWrapper';
import { ILayoutProps } from '../../interfaces/IShared';

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
    return (
        <Box
            px={{ base: '6', md: '6', lg: '20', sm: '10', xl: '28' }}
            pb='0'
            mx='auto'
            pt={{ base: '8', sm: '16', md: '20' }}
        >
            <AnimationWrapper>{children}</AnimationWrapper>
        </Box>
    );
};

export default Layout;
