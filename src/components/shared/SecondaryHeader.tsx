import { Center, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface ISecondaryHeaderProps {
    text: string;
}

const SecondaryHeader: FC<ISecondaryHeaderProps> = ({text}: ISecondaryHeaderProps) =>{
    return (
        <Center>
            <Heading mt={6}>
                {text}
            </Heading>
        </Center>
    )
}

export default SecondaryHeader