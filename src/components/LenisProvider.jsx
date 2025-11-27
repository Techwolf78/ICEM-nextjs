"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✔ sync GSAP with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // ✔ tell GSAP to use Lenis as scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll;
      },
    });

    // ✔ set default scroller
    ScrollTrigger.defaults({
      scroller: document.body,
    });

    ScrollTrigger.refresh();

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
