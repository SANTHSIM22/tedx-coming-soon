/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { useEffect, useState } from "react";
import React from "react";
import "./globals.css";
import TEDxStarsCanvas from "./ui/stars";
import { Dots_v1 } from "./components/start-loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
         <TEDxStarsCanvas/>
          {children}
        </>
      </body>
    </html>
  );
}
