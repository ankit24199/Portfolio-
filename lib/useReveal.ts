"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeNewElements = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            io.observe(el);
          }
        });
    };

    observeNewElements();

    const observer = new MutationObserver(() => {
      observeNewElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, []);
}
