"use client";
import { motion } from "framer-motion";

export const Marquee = ({ children, reverse = false, className = "" }: any) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  );
};
