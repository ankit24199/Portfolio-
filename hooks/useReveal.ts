"use client";
import { useEffect } from "react";

/**
 * Global reveal hook — call ONCE in ClientLayout.
 * Uses a single IntersectionObserver + MutationObserver to catch
 * ALL .reveal / .reveal-left / .reveal-right elements as they
 * mount into the DOM, regardless of timing.
 *
 * This fixes the bug where sections rendered after the initial
 * observer scan would stay at opacity:0 forever.
 */
export function useReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            // Don't unobserve — allows re-trigger if element is re-mounted
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

    // Initial scan
    observeNewElements();

    // Watch for new elements added to DOM (e.g. sections rendering after first paint)
    const mo = new MutationObserver(() => {
      observeNewElements();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
