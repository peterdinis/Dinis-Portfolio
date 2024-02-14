import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from 'react-scroll-to-top';
import './i18n/i18n.ts';
import 'react-vertical-timeline-component/style.min.css';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
            <ScrollToTop smooth={true} />
        </ChakraProvider>
    </React.StrictMode>
);
