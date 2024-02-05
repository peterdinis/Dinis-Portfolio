import { Grid, GridItem, Image as ChakraImage } from '@chakra-ui/react';
import pgLogo from '../images/pg.png';
import queryLogo from '../images/query.svg';
import typescriptLogo from '../images/typescript.png';
import jestLogo from '../images/jest.png';
import expressLogo from '../images/express.png';
import reactLogo from '../images/react.png';
import netLogo from '../images/net.png';
import nestjsLogo from '../images/nestjs.svg';
import nextLogo from '../images/next-js.svg';

const FavoriteStack = () =>{
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={4} mt={2}>
            <GridItem>
                <ChakraImage
                    src={pgLogo}
                    alt={'Postgresql'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={queryLogo}
                    alt={'React-Query'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={nextLogo}
                    alt={'Nextjs'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={typescriptLogo}
                    alt={'Typescript'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={jestLogo}
                    alt={'Jest'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={expressLogo}
                    alt={'Express'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={reactLogo}
                    alt={'React'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={netLogo}
                    alt={'Asp.NET'}
                    width={150}
                    height={150}
                />
            </GridItem>
            <GridItem>
                <ChakraImage
                    src={nestjsLogo}
                    alt={'Nestjs'}
                    width={150}
                    height={150}
                />
            </GridItem>
        </Grid>
    );
}

export default FavoriteStack