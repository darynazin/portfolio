import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect } from "react";

function StarField() {
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(({ camera }) => {
        const t = scrollY.current * 0.002;
        camera.position.z = 10 + t * 50; // fly forward
        camera.rotation.y = t * 0.2;     // yaw
        camera.rotation.x = t * 0.1;     // pitch
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <Stars
                radius={300}
                depth={200}
                count={10000}
                factor={38} // bigger stars
                fade
            />
        </>
    );
}

export default function SpaceBackground() {
    return (
        <Canvas style={{ position: "fixed", inset: 0, pointerEvents: "none" }}>
            <StarField /> {/* ✅ hooks now live inside Canvas */}
        </Canvas>
    );
}