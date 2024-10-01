"use client";
import Hero from "./components/hero";
import { Header } from "./components/header";

import dynamic from "next/dynamic";
import { BacktoTopButton } from "./components/back-to-top";
import { useState, useEffect } from "react";
import { Loading } from "./components/loading";
import Footer from "./components/footer";

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
            <div>
          
            <section id="gallery-section" className="h-screen mt-28">
                <div className="w-full flex justify-center">              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-red-600 text-center">
                    Highlights of <span className="text-white">TEDxSJEC 2022 </span>
                </h1></div>
                <div className="w-screen  flex justify-center no-scrollbar cursor-pointer">
                    <div className="w-[100vw] mb-24  lg:w-[59vw] h-[60vh] md:h-[75vh] lg:h-[90vh] flex justify-center no-scrollbar flex-row md:flex-col">
                        <Gallery />
                    </div>
                </div>

                    <BacktoTopButton />
            </section>

            </div>
            <Footer />
        </>
    );
}
