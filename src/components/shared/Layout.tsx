import { FC, ReactNode } from "react";
import {chakra, Box} from "@chakra-ui/react";

interface ILayoutProps {
    children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({children}: ILayoutProps) =>{
    return (
        <chakra.div>
            <Box
            px={{ base: '6', md: '6', lg: '20', sm: '10', xl: '28' }}
            pb='0'
            mx='auto'
            maxW='1536'
            pt={{ base: '8', sm: '16', md: '20' }}
            >
                {children}
            </Box>
        </chakra.div>
    )
}

export default Layout;