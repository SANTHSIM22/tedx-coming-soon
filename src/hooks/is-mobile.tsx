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
    const controller = new AbortController();
    const { signal } = controller;
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize, { signal });
    }

    return () => {
      if (typeof window !== "undefined") {
        controller.abort();
      }
    };
  }, []);

  return isMobile;
}
