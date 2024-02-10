import {
    Card,
    CardHeader,
    Heading,
    Text,
    CardBody,
    CardFooter,
    Button,
    Badge,
} from '@chakra-ui/react';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface IProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectTech: string;
    deployLink?: string;
    githubLink: string;
    status?: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
    projectDescription,
    projectName,
    projectTech,
    deployLink,
    githubLink,
    status
}) => {
    return (
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Card borderRadius={20}>
                <CardHeader>
                    <Heading textAlign={'center'} size='md' fontWeight={'bold'}>
                        {projectName}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text>{projectDescription}</Text>
                    <Text mt={2}>{status}</Text>
                    <Badge
                        mt={4}
                        variant='solid'
                        borderRadius='20'
                        style={{ whiteSpace: 'normal' }}
                        p={1}
                        colorScheme='green'
                    >
                        {projectTech}
                    </Badge>
                </CardBody>
                <CardFooter>
                    <Button bg={'teal.700'} variant='solid'>
                        {githubLink}
                    </Button>
                    {deployLink && (
                        <Button ml={5} bg={'red.700'} variant='solid'>
                            {deployLink}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
