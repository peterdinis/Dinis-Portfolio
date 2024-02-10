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
                    <Heading textAlign={"center"} size='md' fontWeight={"bold"}>{projectName}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
                       {projectDescription}
                    </Text>
                    <Badge mt={4} variant="solid" borderRadius={"20"} p={1} colorScheme='green'>
                        {projectTech}
                    </Badge>
                </CardBody>
                <CardFooter>
                    <Button bg={"teal.700"} variant="solid">{githubLink}</Button> 
                    <Button ml={5} bg={"red.700"} variant="solid">{deployLink}</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
};

export default ProjectCard;
