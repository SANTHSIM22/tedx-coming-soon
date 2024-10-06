import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { getRandomElements } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

const Gallery = dynamic(
  () => import("@/components/sections/gallery").then((mod) => mod.Gallery),
  { ssr: false }
);

interface ImageData {
  src: string;
}

const images: ImageData[] = getRandomElements(
  Array.from({ length: 14 }, (_, i) => ({
    src: `/highlights/img${i + 1}.avif`,
  }))
);

const radius = 2;
const velocities = [3, -3];

const MobileGallery: React.FC<{ images: ImageData[] }> = ({ images }) => (
  <div className="flex flex-col space-y-5 py-10">
    {velocities.map((v, index) => (
      <ScrollVelocity key={index} velocity={v}>
        {images.map((image, idx) => (
          <div
            key={`highlight-${idx}`}
            className="relative h-[6rem] w-[9rem] sm:h-[8rem] sm:w-[12rem] md:h-[10rem] md:w-[15rem]"
          >
            <Image
              src={image.src}
              alt={`Highlight ${idx}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover object-center rounded-lg"
              priority
            />
          </div>
        ))}
      </ScrollVelocity>
    ))}
    <ScrollVelocity velocity={3}>
      {Array.from({ length: 15 }).map((_, idx) => (
        <Image
          key={idx}
          src="/tedxsjec-white.png"
          alt="TEDxSJEC"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
      ))}
    </ScrollVelocity>
  </div>
);

export const PreviousHighlights: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="mb-10">
      <div className="w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
        {isMobile ? (
          <MobileGallery images={images} />
        ) : (
          <Gallery radius={radius} images={images.slice(0, 9)} />
        )}
      </div>
    </section>
  );
};
