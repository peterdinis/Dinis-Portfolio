import { FC } from 'react';
import { chakra, Image } from '@chakra-ui/react';

interface IStackImageProps {
    image: string;
    alt: string;
}

const StackImage: FC<IStackImageProps> = ({ image, alt }: IStackImageProps) => {
    return (
        <chakra.div>
            <Image src={image} width='70' height='70' alt={alt} />
        </chakra.div>
    );
};

export default StackImage;
