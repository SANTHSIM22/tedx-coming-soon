"use client";
import Hero from "./components/hero";
import { Header } from "./components/header";

import dynamic from "next/dynamic";
import { BacktoTopButton } from "./components/back-to-top";
import { Suspense, useState } from "react";
import { Loading } from "./components/loading";
const Gallery = dynamic(() => import("./components/gallery").then((mod) => mod.Gallery), { ssr: false });

export default function Home() {
    const [loading, setLoading] = useState(true);
    
    setTimeout(() => {
        setLoading(false);
    }, 5000);
   
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
            <section id="gallery-section">
                <div className="w-screen h-screen  flex  justify-center no-scrollbar ">
                    <div className="w-screen  flex justify-center no-scrollbar flex-row md:flex-col">
                        <Suspense fallback={<div>Loading Gallery...</div>}>
                            <Gallery />
                        </Suspense>
                    </div>
                </div>
                <div className="mb-44">
                    <BacktoTopButton />
                </div>
            </section>
        </>
    );
}
