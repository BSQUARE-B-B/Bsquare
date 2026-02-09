"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

const MD_BREAKPOINT = 768;

/** True when viewport is md or wider. Use to apply hoverLift only on desktop. */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    setIsDesktop(mql.matches);
    const fn = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", fn);
    return () => mql.removeEventListener("change", fn);
  }, []);
  return isDesktop;
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const DURATION = 0.4;
const DURATION_FAST = 0.35;

/** Opacity + translateY up. Use with initial/animate/transition or with useMotion(). */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION, ease: EASE },
};

/** Opacity only. Use with initial/animate/transition or with useMotion(). */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATION_FAST, ease: EASE },
};

/** Container for staggered children. Use with motion div + variants; children use staggerChild. */
export const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

/** Child variant for containerStagger. Only opacity + transform. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_FAST, ease: EASE },
  },
};

/** Desktop-only hover lift (apply on md+ via className or wrapper to avoid mobile). */
export const hoverLift: { whileHover?: { y: number }; transition?: Transition } = {
  whileHover: { y: -4 },
  transition: { duration: 0.2, ease: EASE },
};

const noTransition = { duration: 0 };

/** Simple type for motion props to avoid "union too complex" in consumers. */
export interface MotionVariantsResult {
  reduced: boolean;
  fadeUp: {
    initial: { opacity: number; y?: number };
    animate: { opacity: number; y?: number };
    transition: { duration: number; ease?: readonly number[] };
  };
  fadeIn: {
    initial: { opacity: number };
    animate: { opacity: number };
    transition: { duration: number; ease?: readonly number[] };
  };
  containerStagger: { initial: string; animate: string; variants: Record<string, unknown> };
  staggerChild: { variants: Record<string, unknown> };
  hoverLift: { whileHover?: { y: number }; transition?: Transition };
}

/** Reduced-motion-aware variants: when useReducedMotion() is true, no initial animation and no transitions. */
export function useMotion(): MotionVariantsResult {
  const reduced = useReducedMotion() ?? false;
  if (!reduced) {
    return {
      reduced: false,
      fadeUp: { initial: fadeUp.initial, animate: fadeUp.animate, transition: fadeUp.transition! },
      fadeIn: { initial: fadeIn.initial, animate: fadeIn.animate, transition: fadeIn.transition! },
      containerStagger: {
        initial: "hidden",
        animate: "visible",
        variants: containerStagger,
      },
      staggerChild: { variants: staggerChild },
      hoverLift,
    };
  }
  const visible = { opacity: 1, y: 0 };
  return {
    reduced: true,
    fadeUp: { initial: visible, animate: visible, transition: noTransition },
    fadeIn: { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: noTransition },
    containerStagger: {
      initial: "visible",
      animate: "visible",
      variants: { hidden: visible, visible: { transition: { staggerChildren: 0, delayChildren: 0 } } },
    },
    staggerChild: { variants: { hidden: visible, visible } },
    hoverLift: {},
  };
}
