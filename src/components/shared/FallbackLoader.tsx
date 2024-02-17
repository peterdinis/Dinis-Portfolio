import { useEffect, useState } from 'react';
import { CircularProgress, Box, Text } from '@chakra-ui/react';
import { ICircularProgressWithLabelProps } from '../../interfaces/IShared';

function CircularProgressWithLabel({ value }: ICircularProgressWithLabelProps) {
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
                <Text
                    fontSize='sm'
                    color='gray.500'
                >{`${Math.round(value)}%`}</Text>
            </Box>
        </Box>
    );
}

export default function FallbackLoader() {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}
