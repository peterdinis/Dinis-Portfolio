import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import ScrollToTop from 'react-scroll-to-top';
import './i18n/i18n.ts';
import 'react-vertical-timeline-component/style.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Suspense
                fallback={
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                }
            >
                <App />
            </Suspense>
            <ScrollToTop smooth={true} />
        </ChakraProvider>
    </StrictMode>
);
