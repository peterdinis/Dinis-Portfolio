import { FC } from 'react';
import SecondaryHeader from '../shared/SecondaryHeader';
import ProjectsCards from './ProjectCards';
import { chakra } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

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
