"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Animations() {
  const path = usePathname();
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        "[data-hero]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: "power2.out",
          clearProps: "all",
        },
      );
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((el) =>
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: { trigger: el, start: "top 96%", once: true },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>(".image-reveal")
        .forEach((el) =>
          gsap.fromTo(
            el,
            { clipPath: "inset(0 0 7% 0)" },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.1,
              ease: "power2.out",
              clearProps: "clipPath",
              scrollTrigger: { trigger: el, start: "top 95%", once: true },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>("[data-parallax]")
        .forEach((el) =>
          gsap.to(el, {
            y: 35,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }),
        );
    });
    return () => mm.revert();
  }, [path]);
  return null;
}
