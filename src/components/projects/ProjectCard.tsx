import {
    Card,
    CardHeader,
    Heading,
    Text,
    CardBody,
    CardFooter,
    Button,
    Link,
    useColorMode,
    Badge,
} from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface IProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectTech: string;
    deployLink?: string;
    deployText?: string;
    githubLink: string;
    githubLinkText: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
    projectDescription,
    projectName,
    projectTech,
    deployLink,
    githubLink,
    deployText,
    githubLinkText,
}) => {
    const { colorMode } = useColorMode();
    return (
        <motion.div>
            <Card borderRadius={20}>
                <CardHeader>
                    <Heading textAlign={'center'} size='md' fontWeight={'bold'}>
                        {projectName}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text p={2} fontWeight={'bold'}>
                        {projectDescription}
                    </Text>
                    <Badge
                        mt={4}
                        variant='solid'
                        borderRadius='20'
                        style={{ whiteSpace: 'normal' }}
                        p={1.5}
                        colorScheme='green'
                    >
                        {projectTech}
                    </Badge>
                </CardBody>
                <CardFooter>
                    <Button bg={'teal.700'} variant='solid'>
                        {colorMode === 'light' ? (
                            <Link color='white' href={githubLink}>
                                {githubLinkText}
                            </Link>
                        ) : (
                            <Link color={'white'} href={githubLink}>
                                {githubLinkText}
                            </Link>
                        )}
                    </Button>
                    {deployLink && (
                        <Button ml={5} bg={'red.700'} variant='solid'>
                            {colorMode === 'light' ? (
                                <Link color='white' href={deployLink}>
                                    {deployText}
                                </Link>
                            ) : (
                                <Link color='white' href={deployLink}>
                                    {deployText}
                                </Link>
                            )}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
