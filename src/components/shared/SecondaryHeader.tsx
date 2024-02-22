import { Center, Text} from '@chakra-ui/react';
import { FC } from 'react';
import { ISecondaryHeaderProps } from '../../interfaces/IShared';

const SecondaryHeader: FC<ISecondaryHeaderProps> = ({
    text,
}: ISecondaryHeaderProps) => {
    return (
        <Center>
            <Text fontWeight={"bold"} fontSize={"2.5rem"} mt={6}>{text}</Text>
        </Center>
    );
};

export default SecondaryHeader;
