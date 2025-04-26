'use client';

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex h-10/12 items-center justify-center flex-col gap-7"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3
        className="text-4xl w-5/12 font-bold text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Bem-vindo ao Memoriza. Estude rápido. Lembre sempre!
      </motion.h3>
      <motion.button
        className="relative flex items-center justify-center w-full max-w-xs px-6 py-3 bg-white text-gray-700 font-medium rounded-2xl shadow-md hover:shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowRight className="absolute left-4 w-5 h-5" strokeWidth={3} />
        <span className="mx-auto font-bold">Vamos começar</span>
      </motion.button>
    </motion.div>
  );
}