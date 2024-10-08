import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, Environment, ScrollControls, useScroll, useTexture } from "@react-three/drei";
import { easing } from "maath";
import "./utils";

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export const Gallery = () => {
    const isMobileDevice = isMobile();
    const count = useMemo(() => (isMobileDevice ? 7 : 7), [isMobileDevice]);
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 25 }}
            className="h-screen z-10"
            pixelRatio={window.devicePixelRatio}
            gl={{ antialias: true, powerPreference: "high-performance" }}
        >
            <fog attach="fog" args={["#a79", 8.5, 12]} />
            <ScrollControls
                pages={3}
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <Rig rotation={[0, 0, 0.3]}>
                    <Carousel count={count} />
                </Rig>
                <Banner position={[0, -0.03, 0]} />
            </ScrollControls>
            <Environment preset="dawn" blur={0.1} />
        </Canvas>
    );
};

function Rig(props) {
    const ref = useRef();
    const scroll = useScroll();

    useFrame((state, delta) => {
        if (scroll) {
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
        }
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
        state.camera.lookAt(0, 0, 0);
        ref.current.scale.set(1.8, 1.8, 1.8);
    });

    return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.2, count = 6 }) {
    return useMemo(
        () =>
            Array.from({ length: count }, (_, i) => (
                <Card
                    key={i}
                    url={`/img${Math.floor(i % 10) + 1}_.avif`}
                    position={[
                        Math.sin((i / count) * Math.PI * 2) * radius,
                        0,
                        Math.cos((i / count) * Math.PI * 2) * radius,
                    ]}
                    rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
                />
            )),
        [count, radius]
    );
}

function Card({ url, ...props }) {
    const ref = useRef();
    const [hovered, hover] = useState(false);

    const pointerOver = (e) => {
        e.stopPropagation();
        hover(true);
    };

    const pointerOut = () => hover(false);

    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        easing.damp(ref.current.material, "radius", hovered ? 0.25 : 0.1, 0.2, delta);
        easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
    });

    return (
        <Image
            alt="images"
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            {...props}
        >
            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    );
}

function Banner(props) {
    const ref = useRef();
    const texture = useTexture("/logo-white.avif");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const scroll = useScroll();

    useFrame((state, delta) => {
        ref.current.material.time.value += Math.abs(scroll.delta) * 4;
        ref.current.material.map.offset.x += delta / 2;
        ref.current.scale.set(1.8, 1.8, 1.8);
    });

    return (
        <mesh ref={ref} {...props}>
            <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
            <meshSineMaterial
                map={texture}
                map-anisotropy={16}
                map-repeat={[30, 1]}
                side={THREE.DoubleSide}
                toneMapped={false}
            />
        </mesh>
    );
}
