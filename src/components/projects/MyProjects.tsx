import { chakra } from '@chakra-ui/react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SecondaryHeader from '../shared/SecondaryHeader';
import ProjectsCards from './ProjectCards';

const MyProjects: FC = () => {
    const { t } = useTranslation();

    return (
        <chakra.div id='projects'>
            <SecondaryHeader text={t('description.projectsHeader')} />
            <ProjectsCards />
        </chakra.div>
    );
};

export default MyProjects;
