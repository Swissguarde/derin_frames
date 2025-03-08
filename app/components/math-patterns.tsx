import { motion } from "framer-motion";

export const MathPatterns = () => {
  return (
    <>
      {/* DNA Helix */}
      <motion.div
        className="absolute right-10 top-20"
        animate={{
          rotateX: [0, 360],
          y: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="100"
          height="150"
          viewBox="0 0 100 150"
          className="opacity-20"
        >
          <path
            d="M20,0 C40,25 60,25 80,0 C60,50 40,50 20,75 C40,100 60,100 80,75 C60,125 40,125 20,150"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M20,0 L80,0 M20,75 L80,75 M20,150 L80,150"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </motion.div>

      {/* Circuit Pattern */}
      <motion.div
        className="absolute left-10 bottom-20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="opacity-20"
        >
          <path
            d="M10,60 L40,60 M40,60 L40,30 M40,30 L80,30 M80,30 L80,90 M80,90 L110,90"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="40" cy="60" r="4" fill="white" />
          <circle cx="80" cy="30" r="4" fill="white" />
          <circle cx="80" cy="90" r="4" fill="white" />
        </svg>
      </motion.div>

      {/* Rotating Gear */}
      <motion.div
        className="absolute right-20 bottom-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <path
            d="M50,10 L54,24 L68,16 L66,31 L82,29 L74,42 L89,46 L76,54 L87,63 L71,65 L77,78 L60,74 L60,90 L46,80 L40,94 L31,79 L21,89 L19,72 L4,77 L9,60 L0,60 L10,46 L4,42 L19,35 L16,20 L31,20 L34,6 L46,13 Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="10" fill="none" stroke="white" />
        </svg>
      </motion.div>

      {/* Binary Code Stream */}
      <motion.div
        className="absolute left-20 top-40"
        animate={{ y: [0, 100] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg
          width="60"
          height="200"
          viewBox="0 0 60 200"
          className="opacity-20"
        >
          <text x="0" y="20" fill="white" className="text-xs">
            1 0 1
          </text>
          <text x="20" y="40" fill="white" className="text-xs">
            0 1 0
          </text>
          <text x="10" y="60" fill="white" className="text-xs">
            1 1 0
          </text>
          <text x="0" y="80" fill="white" className="text-xs">
            0 0 1
          </text>
        </svg>
      </motion.div>

      {/* Integral Symbol */}
      <motion.div
        className="absolute right-40 top-30"
        animate={{
          scaleY: [1, 1.1, 1],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg
          width="40"
          height="120"
          viewBox="0 0 40 120"
          className="opacity-20"
        >
          <path
            d="M30,10 C0,30 40,90 10,110"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M5,10 C15,5 25,5 35,10"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M5,110 C15,115 25,115 35,110"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </>
  );
};
