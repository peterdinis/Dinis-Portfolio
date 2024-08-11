import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'react-vertical-timeline-component/style.min.css';
import ScrollToTop from './components/ScrollToTop.tsx';
import './i18n/i18n.ts';
import './index.css';
import { routeTree } from './routeTree.gen.ts';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Suspense
                fallback={
                    <Spinner
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='2xl'
                    />
                }
            >
                <RouterProvider router={router} />
            </Suspense>
            <ScrollToTop />
        </ChakraProvider>
    </StrictMode>,
);
