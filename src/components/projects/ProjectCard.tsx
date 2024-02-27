import {
    Card,
    CardHeader,
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
import { IProjectCardProps } from '../../interfaces/IProject';

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
        <motion.div
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.25 },
            }}
        >
            <Card borderRadius={20}>
                <CardHeader>
                    <Text textAlign={'center'} size='md' fontWeight={'bold'}>
                        {projectName}
                    </Text>
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
                    <Button
                        _hover={{ bg: 'teal.700' }}
                        bg={'teal.700'}
                        variant='solid'
                    >
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
                        <Button
                            _hover={{ bg: 'red.700' }}
                            ml={5}
                            bg={'red.700'}
                            variant='solid'
                        >
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
