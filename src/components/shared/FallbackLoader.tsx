import { type FC, useEffect, useState } from 'react';
import CircularProgressWithLabel from './CircularProgress';

const FallbackLoader: FC = () => {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10,
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
};

export default FallbackLoader;
