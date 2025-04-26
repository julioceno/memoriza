'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex h-screen items-center justify-center flex-col gap-7 px-4 max-w-5xl w-full mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Sobre o Memoriza
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        O Memoriza é uma plataforma criada para ajudar você a estudar de forma eficiente e lembrar sempre do que aprendeu. Explore nossos recursos e alcance seus objetivos!
      </motion.p>
    </motion.div>
  );
}