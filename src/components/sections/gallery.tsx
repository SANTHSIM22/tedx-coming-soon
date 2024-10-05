import * as THREE from "three";
import React, { useRef, useState, useCallback, useMemo } from "react";
import {
  Canvas,
  useFrame,
  MeshProps,
  GroupProps,
} from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  useScroll,
  useTexture,
  ImageProps,
} from "@react-three/drei";
import { easing } from "maath";
import "@/lib/extenders/bentPlaneGeometry";
import "@/lib/extenders/meshSineMaterial";
import { useIsMobile } from "@/hooks/useIsMobile";

const carouselImages: { src: string }[] = Array.from({ length: 9 }, (_, i) => ({
  src: `/img${Math.floor(i % 10) + 1}_.jpg.jpg`,
}));

const radius = 2;

export const Gallery = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      <ScrollControls style={{ scrollbarWidth: "none" }} pages={4} infinite>
        <Carousel
          rotation={[0, 0, 0.15]}
          images={carouselImages}
          radius={radius}
        />
        <Banner position={[0, -0.15, 0]} radius={radius} />
      </ScrollControls>
    </Canvas>
  );
};

interface CarouselProps extends Omit<GroupProps, "children"> {
  radius: number;
  images: { src: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ radius, images, ...props }) => {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state?.events?.update?.();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  const cardsCount = images.length;

  const cards = useMemo(() =>
    images.map((image, i) => (
      <Card
        key={i}
        url={image.src}
        position={[
          Math.sin((i / cardsCount) * Math.PI * 2) * radius,
          0,
          Math.cos((i / cardsCount) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (i / cardsCount) * Math.PI * 2, 0]}
      />
    )),
    [images, cardsCount, radius]
  );

  return (
    <group ref={ref} {...props}>
      {cards}
    </group>
  );
};

const Card: React.FC<ImageProps> = (props) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const isMobile = useIsMobile();

  const handleInteraction = useCallback((isHovered: boolean) => {
    setHover(isHovered);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    easing.damp3(
      ref.current.scale,
      hovered ? (isMobile ? 0.8 : 1.15) : isMobile ? 0.75 : 1,
      0.1,
      delta
    );
    if (ref.current.material instanceof THREE.ShaderMaterial) {
      easing.damp(
        ref.current.material.uniforms.radius,
        "value",
        hovered ? 0.25 : 0.1,
        0.2,
        delta
      );
      easing.damp(
        ref.current.material.uniforms.zoom,
        "value",
        hovered ? 1 : 1.5,
        0.2,
        delta
      );
    }
  });

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      ref={ref}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={() => handleInteraction(true)}
      onPointerOut={() => handleInteraction(false)}
      onPointerDown={() => handleInteraction(true)}
      onPointerUp={() => handleInteraction(false)}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
};

interface BannerProps extends MeshProps {
  radius: number;
}

const Banner: React.FC<BannerProps> = ({ radius, ...props }) => {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useTexture("/logo-white.png");

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();

  useFrame((_, delta) => {
    if (!ref.current || !(ref.current.material instanceof THREE.ShaderMaterial)) return;
    ref.current.material.uniforms.time.value += Math.abs(scroll.delta) * 4;
    texture.offset.x += delta / 2;
  });

  const radialSymmetry = Math.min(2.6, radius * 1.15);
  const height = Math.min(0.2, radius * 0.1);

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry
        args={[radialSymmetry, radialSymmetry, height, 128, 16, true]}
      />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
};
