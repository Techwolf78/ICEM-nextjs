"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useLayoutEffect(() => {
    // 1. SAFARI DETECTION
    // We explicitly exclude Chrome and Android because they also have "Safari" in their UserAgent string.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // 2. CONDITIONAL INITIALIZATION
    // If it is Safari, we DO NOT load Lenis. We let the browser handle native scrolling.
    if (isSafari) {
      return;
    }

    // --- FROM HERE DOWN, THIS ONLY RUNS ON CHROME / WINDOWS / FIREFOX ---

    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1, // Reset to 1 for Windows (1.1 can feel too fast)
      smoothTouch: false, // Keep touch native
    });

    // Sync ScrollTrigger with Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // 3. SYNC GSAP TICKER
    // This ensures GSAP animations update exactly when Lenis updates the scroll
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 4. LAG SMOOTHING (Chrome/Windows Only)
    // We disable lag smoothing here because Lenis needs precise frame-by-frame updates.
    // Since we disabled this on Safari (the laggy browser), this is safe to do on Chrome.
    gsap.ticker.lagSmoothing(0);

    // 5. SCROLLER PROXY
    // This tells ScrollTrigger: "Don't listen to the window, listen to Lenis"
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
      // Important: Lenis moves content using CSS Transforms, not native scroll
      pinType: "transform",
    });

    // 6. INITIAL REFRESH
    ScrollTrigger.refresh();

    // 7. CLEANUP
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      // We should ideally revert the scrollerProxy, but GSAP doesn't offer a clean 'removeProxy'.
      // Usually not an issue in SPA navigation unless you mount/unmount the provider often.
    };
  }, []);

  return <>{children}</>;
}
