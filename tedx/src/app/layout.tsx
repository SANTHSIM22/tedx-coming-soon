/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import "./globals.css";
import TEDxStarsCanvas from "./ui/stars";
import Script from "next/script";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar">
            <Script
                defer
                src={process.env.NEXT_PUBLIC_WEBSITE_SRC}
                data-website-id={process.env.NEXT_PUBLIC_WEBSITE_ID}
            ></Script>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
                    rel="stylesheet"
                />

                <meta
                    name="description"
                    content="TEDxSJEC: Inspiring talks from the brightest minds at St. Joseph Engineering College."
                />
                <meta
                    name="keywords"
                    content="TEDx, TEDxSJEC, talks, inspiration, innovation, St. Joseph Engineering College"
                />
                <meta name="author" content="TEDxSJEC Team" />
                <meta property="og:title" content="TEDxSJEC" />
                <meta
                    property="og:description"
                    content="Join us for inspiring talks and discussions at TEDxSJEC."
                />
                <meta property="og:image" content="/logo-white.avif" />
                <meta property="og:url" content="https://tedxsjec.in/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TEDxSJEC" />
                <meta
                    name="twitter:description"
                    content="Join us for inspiring talks and discussions at TEDxSJEC."
                />
                <meta name="twitter:image" content="/logo-white.avif" />
            </head>
            <body>
                <>
                    <TEDxStarsCanvas />
                    {children}
                </>
            </body>
        </html>
    );
}
