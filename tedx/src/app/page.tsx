"use client";
import Hero from "./components/hero";
import { Header } from "./components/header";
import { Gallery } from "./components/gallery";

import { BacktoTopButton } from "./components/back-to-top";
import { useState } from "react";
import { RotateLoader } from "react-spinners";

export default function Home() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
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
                            <RotateLoader color="#EB0028" />
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
