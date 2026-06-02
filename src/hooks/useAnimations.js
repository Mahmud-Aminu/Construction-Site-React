import { useEffect, useRef } from "react";

/**
 * Custom hook for Intersection Observer-based scroll reveal animations.
 * Adds 'revealed' class to elements when they enter the viewport.
 */
export function useScrollReveal(options = {}, externalRef = null) {
  const internalRef = useRef(null);
  const ref = externalRef || internalRef;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      },
    );

    // Observe the container and all reveal children
    const revealElements = element.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [options.threshold, options.rootMargin, ref]);

  return ref;
}

/**
 * Custom hook for animated counter.
 * Counts from 0 to target value when the element enters viewport.
 */
export function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount(element, target, duration);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [target, duration]);

  return ref;
}

function animateCount(element, target, duration) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}
