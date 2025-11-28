"use client";

import { useLayoutEffect, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      lerp: 0.1, // Lower lerp = smoother but heavier feel
      wheelMultiplier: 1.1,
      // Touch smooth often conflicts with mobile native scroll, disable if mobile jitter persists
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // --------------------------------------------------------
    // 1. SYNC LENIS TO GSAP TICKER (Crucial for Jitter Fix)
    // --------------------------------------------------------
    gsap.ticker.add((time) => {
      // GSAP gives time in seconds, Lenis needs ms
      lenis.raf(time * 1000);
    });

    // --------------------------------------------------------
    // 2. DISABLE LAG SMOOTHING
    // --------------------------------------------------------
    // Prevents GSAP from "jumping" to catch up if a frame is dropped
    // due to heavy Instagram rendering.
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // Lenis uses transforms, so we must tell ScrollTrigger that
      pinType: "transform",
    });

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
