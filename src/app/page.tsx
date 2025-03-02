"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio 🚀
      </motion.h1>
      <p className="mt-4 text-lg">
        I build awesome projects using Next.js, Tailwind CSS, and MDX.
      </p>
    </main>
  );
}