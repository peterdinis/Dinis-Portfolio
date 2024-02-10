import { SimpleGrid, Card, CardHeader, Heading, Text, CardBody, CardFooter, Button, Badge } from '@chakra-ui/react';
import { FC } from 'react';

interface IProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectTech: string;
    deployLink?: string;
    githubLink: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
    projectDescription,
    projectName,
    projectTech,
    deployLink,
    githubLink,
}) => {
    return (
        <SimpleGrid
            spacing={4}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        >
            <Card>
                <CardHeader>
                    <Heading size='md'>{projectName}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
                       {projectDescription}
                    </Text>
                    <Badge>
                        {projectTech}
                    </Badge>
                </CardBody>
                <CardFooter>
                    <Button>{githubLink}</Button> 
                    <Button>{deployLink}</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
};

export default ProjectCard;
