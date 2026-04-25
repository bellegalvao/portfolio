"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const totalDuration = 2200;
    const interval = 16;
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / steps;
      const eased = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setExiting(true), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--background)] flex flex-col justify-end px-6 md:px-16 pb-10 md:pb-14"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-7xl md:text-9xl font-bold tabular-nums leading-none mb-6 text-[var(--foreground)]">
            {progress}%
          </span>
          <div className="w-full h-px bg-[var(--border)]">
            <div
              className="h-full bg-[var(--foreground)] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
