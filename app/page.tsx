"use client";

import { motion } from "framer-motion";
import FramesFormModal from "./components/frames-form-modal";
import { MathPatterns } from "./components/math-patterns";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-slate-900 via-purple-950 to-indigo-900 relative overflow-hidden">
      <MathPatterns />
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 leading-tight"
            >
              STRUCTURAL ANALYSIS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-300"
            >
              FRAMES
            </motion.p>

            <FramesFormModal />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
