"use client";
import Hero from "./components/hero";
import { Header } from "./components/header";

import dynamic from "next/dynamic";
import { BacktoTopButton } from "./components/back-to-top";
import { useState, useEffect } from "react";
import { Loading } from "./components/loading";

const Gallery = dynamic(() => import("./components/gallery").then((mod) => mod.Gallery), { ssr: false });

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="relative min-h-screen ">
                {/* Centered Header */}
                <div className="absolute inset-x-0 top-0 mx-10">
                    <Header />
                </div>

                {/* Main Content */}
                <div>
                    {loading ? (
                        <div className="w-screen h-screen flex justify-center items-center">
                            <Loading />
                        </div>
                    ) : (
                        <Hero />
                    )}

                    {/* <Footer /> */}
                </div>
            </div>
            <section id="tedx-heading-section" className="w-full flex justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-red-600 text-center">
                    Highlights of <span className="text-white">TEDxSJEC 2022 </span>
                </h1>
            </section>

            <section id="gallery-section">
                <div className="w-screen h-screen flex justify-center no-scrollbar">
                    <div className="w-screen flex justify-center no-scrollbar flex-row md:flex-col">
                        <Gallery />
                    </div>
                </div>
                <div className="mb-44">
                    <BacktoTopButton />
                </div>
            </section>
        </>
    );
}
