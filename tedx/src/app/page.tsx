"use client";
import Hero from "./components/hero";
import { Header } from "./components/header";
import { Gallery } from "./components/gallery";

import { BacktoTopButton } from "./components/back-to-top";

export default function Home() {
    return (
        <>
            <div className="relative min-h-screen ">
                {/* Centered Header */}
                <div className="absolute inset-x-0 top-0 mx-10">
                    <Header />
                </div>

                {/* Main Content */}
                <div>
                    <Hero />

                    {/* <Footer /> */}
                </div>
            </div>
            <section id="gallery-section">
                <div className="w-screen h-screen  flex  justify-center no-scrollbar ">
                    <div className="w-screen  flex justify-center no-scrollbar flex-col">
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
