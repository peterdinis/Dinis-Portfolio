import { FC, ReactNode, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import AnimationWrapper from './AnimationWrapper';
import FallbackLoader from './FallbackLoader';

interface ILayoutProps {
    children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
    return (
        <Suspense fallback={<FallbackLoader />}>
            <Box
                px={{ base: '6', md: '6', lg: '20', sm: '10', xl: '28' }}
                pb='0'
                mx='auto'
                pt={{ base: '8', sm: '16', md: '20' }}
            >
                <AnimationWrapper>{children}</AnimationWrapper>
            </Box>
        </Suspense>
    );
};

export default Layout;
