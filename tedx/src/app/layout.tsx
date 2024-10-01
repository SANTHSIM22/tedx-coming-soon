/* eslint-disable @next/next/no-page-custom-font */

import Footer from "./components/footer";
import "./globals.css";
import { StarsCanvas } from "./ui/stars";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <StarsCanvas />
                {children}
            </body>
        </html>
    );
}
