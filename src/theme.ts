import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            '.timelineContentContainer': {
                textAlign: 'left',
            },
            '.timelineContent': {
                display: 'inline-block',
                transform: 'rotate(-90deg)',
                textAlign: 'center',
                minWidth: 50,
            },
            '.timelineIcon': {
                transform: 'rotate(-90deg)',
            },
        },
    },
});

export default theme;
