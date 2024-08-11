import { Center, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import type { ISecondaryHeaderProps } from '../../interfaces/IShared';

const SecondaryHeader: FC<ISecondaryHeaderProps> = ({
    text,
}: ISecondaryHeaderProps) => {
    return (
        <Center>
            <Text fontWeight={'bold'} fontSize={'2.5rem'} mt={6}>
                {text}
            </Text>
        </Center>
    );
};

export default SecondaryHeader;
