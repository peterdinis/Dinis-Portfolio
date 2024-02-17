import { Center, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { ISecondaryHeaderProps } from '../../interfaces/IShared';

const SecondaryHeader: FC<ISecondaryHeaderProps> = ({
    text,
}: ISecondaryHeaderProps) => {
    return (
        <Center>
            <Heading mt={6}>{text}</Heading>
        </Center>
    );
};

export default SecondaryHeader;
