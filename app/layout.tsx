import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Sidney's Portfolio",
    description:
        'Sidney Hopkins | Portfolio | Frontend Engineer | React, React Native, TypeScript, Next.js',
    creator: 'Sidney Hopkins',
    keywords: [
        'Software Portfolio',
        'React',
        'Front-end',
        'Frontend',
        'TypeScript',
        'React Native',
    ],
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
    openGraph: {
        title: "Sidney's Portfolio",
        description:
            'Sidney Hopkins | Portfolio | Frontend Engineer | React, React Native, TypeScript, Next.js',
        url: 'https://sidneyhopkins.info',
        siteName: "Sidney's Portfolio",
        images: [
            {
                url: 'https://sidneyhopkins.info/img/laptoptea.webp', // Must be an absolute URL
                width: 600,
                height: 600,
                alt: 'minimal graphic art of laptop and mug of tea',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    icons: {
        icon: '/icon.png',
        shortcut: '/shortcut-icon.png',
        apple: '/apple-icon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/apple-touch-icon-precomposed.png',
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Header />
                <main
                    id="main"
                    className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light px-4 sm:px-8 py-8 md:py-16 text-2xl">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
