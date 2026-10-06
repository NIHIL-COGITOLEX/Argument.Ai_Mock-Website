"use client";
import { useEffect } from "react";
import { motion } from "motion/react";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>{children}</motion.div>;
}
