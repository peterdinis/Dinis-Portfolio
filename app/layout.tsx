import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import ScrollToTop from './components/shared/ScrollToTop';

const pressStart2P = Press_Start_2P({
    weight: '400',
    variable: '--font-minecraft',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Peter Dinis | Full Stack Developer',
    description:
        'Discover the portfolio of Peter Dinis, a full stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and real-world applications.',
    keywords: [
        'Peter Dinis',
        'Full Stack Developer',
        'Web Developer',
        'React Developer',
        'Next.js Portfolio',
        'JavaScript Developer',
        'Frontend',
        'Backend',
        'Software Engineer',
        'Fullstack Development',
    ],
    authors: [
        {
            name: 'Peter Dinis',
            url: 'https://dinis-portfolio.vercel.app/',
        },
    ],
    creator: 'Peter Dinis',
    publisher: 'Peter Dinis',
    metadataBase: new URL('https://dinis-portfolio.vercel.app/'),
    openGraph: {
        title: 'Peter Dinis – Full Stack Web Developer',
        description:
            'Explore the portfolio of Peter Dinis, showcasing projects in React, Next.js, Node.js, and more.',
        url: 'https://dinis-portfolio.vercel.app/',
        siteName: 'Peter Dinis Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://dinis-portfolio.vercel.app/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${pressStart2P.variable} font-minecraft`}>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
