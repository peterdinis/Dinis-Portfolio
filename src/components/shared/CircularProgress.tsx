import { Box, CircularProgress, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import type { ICircularProgressWithLabelProps } from '../../interfaces/IShared';

const CircularProgressWithLabel: FC<ICircularProgressWithLabelProps> = ({
    value,
}: ICircularProgressWithLabelProps) => {
    return (
        <Box position='relative' display='inline-flex'>
            <CircularProgress
                value={value}
                size='120px'
                thickness='8px'
                color='teal.500'
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position='absolute'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Text fontSize='sm' color='gray.500'>{`${Math.round(
                    value,
                )}%`}</Text>
            </Box>
        </Box>
    );
};

export default CircularProgressWithLabel;
