"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  mode?: "load" | "in-view";
};

export default function Reveal({ children, mode = "load" }: Props) {
  const isInView = mode === "in-view";

  return (
    <motion.div
      initial={{ opacity: 0, y: isInView ? 24 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={
        isInView
          ? { once: true, margin: "0px 0px -15% 0px" }
          : { once: true }
      }
      transition={{ duration: isInView ? 0.7 : 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
