"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/Landing";
import dynamic from "next/dynamic";
import Loading from "./components/loading";
import ScrollVelocity from "./components/scroll-velocity";
import Image from "next/image";
import ScrollVelocity1 from "./components/scroll-velocity2";
import { NumberTicker } from "./components/number-ticker";
import { motion } from "framer-motion";
import Footer from "./components/footer";
// Dynamic import for the gallery with 3js rendering
const Gallery = dynamic(() => import("./components/gallery").then((mod) => mod.Gallery), { ssr: false });

const Preloader: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
        >
            <div className="flex justify-center">
                <Image
                    src="/logo-white.avif"
                    alt="TEDxSJEC"
                    width={400}
                    height={400}
                    className="rounded-full"
                />
            </div>
            <div className="text-6xl md:text-8xl font-bold mb-8">
                <NumberTicker value={progress} className="text-[#e62b1e]" />
                <span className="text-3xl md:text-5xl ml-2">%</span>
            </div>
            <div className="w-64 md:w-96 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#e62b1e] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="mt-8 text-lg md:text-xl font-light">Loading ideas worth spreading...</div>
        </motion.div>
    </div>
);

export default function Home() {
    const images = [
        { title: "Moonbeam", thumbnail: "/img1_.avif" },
        { title: "Cursor", thumbnail: "/img2_.avif" },
        { title: "Rogue", thumbnail: "/img3_.avif" },
        { title: "Editorially", thumbnail: "/img4_.avif" },
        { title: "Editrix AI", thumbnail: "/img5_.avif" },
        { title: "Moonbeam 2", thumbnail: "/img6_.avif" },
        { title: "Cursor 2", thumbnail: "/img7_.avif" },
        { title: "Rogue 2", thumbnail: "/img8_.avif" },
        { title: "Editorially 2", thumbnail: "/img9_.avif" },
        { title: "3", thumbnail: "/IMG_3034.avif" },
        { title: "3", thumbnail: "/SAT00249.avif" },
        { title: "3", thumbnail: "/IMG_3414.avif" },
        { title: "3", thumbnail: "/IMG_2865.avif" },
        { title: "3", thumbnail: "/IMG_3309.avif" },
    ];

    const velocity = [1, -1];
    const [galleryLoading, setGalleryLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setGalleryLoading(false);
        }, 12000); // Simulated loading time for the gallery

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const renderScene = () => {
            animationFrameId = requestAnimationFrame(renderScene);
            // Make sure your 3D rendering logic is inside here
            //
        };

        if (!galleryLoading) {
            renderScene(); // Start rendering once the gallery has loaded
        }

        return () => cancelAnimationFrame(animationFrameId); // Clean up when the component unmounts
    }, [galleryLoading]);

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startLoading = () => {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setLoading(false), 1000);
                        return 100;
                    }
                    return prevProgress + 1;
                });
            }, 50);
        };

        startLoading();

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <>
                <Preloader progress={progress} />
            </>
        );
    }

    return (
        <>
            <div className=" min-h-screen flex flex-col ">
                <div>
                    <Hero />
                </div>
            </div>

            <div>
                <section id="gallery-section" className="h-auto">
                    <div className="w-full flex justify-center mt-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-red-600 text-center">
                            Highlights of <span className="text-white">TEDxSJEC 2022</span>
                        </h1>
                    </div>
                    <div className="w-screen hidden lg:flex justify-center no-scrollbar">
                        <div className="w-[100vw]  xl:w-[80vw] lg:w-[100vw] h-[60vh] md:h-[75vh] lg:h-[84vh] flex justify-center no-scrollbar flex-row md:flex-col">
                            {galleryLoading ? (
                                <div className="flex justify-center items-center w-full h-full">
                                    <Loading /> {/* Loading spinner for 5 seconds */}
                                </div>
                            ) : (
                                <Gallery />
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:hidden">
                        <div className="flex flex-col space-y-5 py-10">
                            {velocity.map((v, index) => (
                                <ScrollVelocity key={index} velocity={v}>
                                    {images.map(({ title, thumbnail }) => (
                                        <div
                                            key={title}
                                            className="relative h-[15rem] w-[18rem] md:h-[15rem] md:w-[15rem]"
                                        >
                                            <Image
                                                src={thumbnail}
                                                alt={title}
                                                fill={true}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </ScrollVelocity>
                            ))}
                            <div className="">
                                <ScrollVelocity1 velocity={3} movable={true}>
                                    {[
                                        <div
                                            key="image-container"
                                            className="image-container"
                                            style={{ display: "flex", gap: "10px" }}
                                        >
                                            {Array.from({ length: 200 }).map((_, index) => (
                                                <Image
                                                    key={index}
                                                    src="/logo-white.avif"
                                                    className="hero_icon"
                                                    alt={`Image ${index + 1}`}
                                                    width={100}
                                                    height={100}
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "100%",
                                                        height: "50px",
                                                    }}
                                                />
                                            ))}
                                        </div>,
                                    ]}
                                </ScrollVelocity1>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    );
}
