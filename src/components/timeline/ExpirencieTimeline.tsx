import {
    chakra,
    Container,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ExpirienceTimeline: FC = () => {
    const { t } = useTranslation();
    return (
        <Container id='expirience' maxWidth='7xl' p={{ base: 2, sm: 10 }}>
            <chakra.h3
                fontSize='4xl'
                fontWeight='bold'
                mb={18}
                textAlign='center'
            >
                {t('description.expirienceHeader')}
            </chakra.h3>
        </Container>
    );
};

export default ExpirienceTimeline;
