"use client";
import { useEffect, useState } from "react";

const getIsMobile = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth <= 768;
    }
    return false;
};

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", onResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", onResize);
            }
        };
    }, []);

    return isMobile;
}
