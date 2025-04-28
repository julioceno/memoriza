'use client';

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div
      className="home-gradient flex flex-col items-center justify-center h-screen"
    >
      <motion.div
        className="flex mb-20 items-center justify-center flex-col gap-7 md:px-4 max-w-5xl w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl w-full max-w-2xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Bem-vindo ao Memoriza. Estude rápido. Lembre sempre!
        </motion.h3>
        <motion.button
          className="relative flex items-center justify-center w-3/5 sm:w-full max-w-xs px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-2xl shadow-md hover:shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowRight className="absolute left-4 w-3 sm:w-5 h-3 sm:h-5" strokeWidth={3} />
          <span className="mx-auto font-bold text-xs sm:text-sm">Vamos começar</span>
        </motion.button>
      </motion.div>
    </div>
  );
}