"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

import FrameBendingMomentDiagram from "../components/frame-bending-moment";
import FrameShearForceDiagram from "../components/frame-shear-force-diagram";
import { CalculationResults } from "../types";

// Create a new ScrollReveal component
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function FramesResultsPage() {
  const searchParams = useSearchParams();

  // Parse URL parameters
  const results: CalculationResults = JSON.parse(
    searchParams.get("results") || "[]"
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const ResultCard = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 bg-white/5 backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all rounded-xl">
      {children}
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
      {children}
    </h3>
  );
  console.log(results.finalMoments);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-12 pt-24 min-h-screen bg-gradient-to-tl from-slate-900 via-purple-950 to-indigo-900 text-white"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex items-center mb-12">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/5 hover:bg-purple-500/10 backdrop-blur-lg rounded-lg transition-all border border-purple-500/20 hover:border-purple-500/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </Link>

        <div className="w-[140px]"></div>
      </motion.div>

      <div className="mt-12 space-y-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-8">
            Detailed Analysis Results
          </h2>
        </ScrollReveal>

        {results.columns.length > 0 && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Fixed End Moments - Columns</SectionTitle>
              <div
                className={`grid grid-cols-1 ${
                  results.columns.length === 1
                    ? "md:grid-cols-1"
                    : results.columns.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                } gap-4`}
              >
                {results.columns.map((result, index) => (
                  <ResultCard key={index}>
                    <h4 className="text-lg font-medium text-white mb-4 pb-2 border-b border-purple-500/20">
                      {result.label}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Start Moment:</span>
                        <span className="font-mono font-medium text-indigo-300">
                          {result.start.toFixed(2)} kN⋅m
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">End Moment:</span>
                        <span className="font-mono font-medium text-indigo-300">
                          {result.end.toFixed(2)} kN⋅m
                        </span>
                      </div>
                    </div>
                  </ResultCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.beams.length > 0 && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Fixed End Moments - Beams</SectionTitle>
              <div
                className={`grid grid-cols-1 ${
                  results.beams.length === 1
                    ? "md:grid-cols-1"
                    : results.beams.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                } gap-4`}
              >
                {results.beams.map((result, index) => (
                  <ResultCard key={index}>
                    <h4 className="text-lg font-medium text-white mb-4 pb-2 border-b border-purple-500/20">
                      {result.label}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Start Moment:</span>
                        <span className="font-mono font-medium text-indigo-300">
                          {result.start.toFixed(2)} kN⋅m
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">End Moment:</span>
                        <span className="font-mono font-medium text-indigo-300">
                          {result.end.toFixed(2)} kN⋅m
                        </span>
                      </div>
                    </div>
                  </ResultCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.slopeDeflectionEquations.length > 0 && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Slope Deflection Equations</SectionTitle>
              <div className="grid grid-cols-1 gap-4">
                {results.slopeDeflectionEquations.map((equation, index) => (
                  <ResultCard key={index}>
                    <h4 className="text-lg font-medium text-white mb-4 pb-2 border-b border-purple-500/20">
                      Member {equation.memberLabel}
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <span className="text-white/70">Start Equation:</span>
                        <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                          M{equation.memberLabel}s = {equation.startEquation}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-white/70">End Equation:</span>
                        <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                          M{equation.memberLabel}e = {equation.endEquation}
                        </div>
                      </div>
                    </div>
                  </ResultCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.boundaryEquations && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Boundary Equations</SectionTitle>
              <div className="p-6  backdrop-blur-sm rounded-xl border border-purple-500/20">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <span className="text-white/70">MBA + MBC = 0</span>
                    <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                      {results.boundaryEquations.eq1} = 0
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/70">MCB + MCD = 0</span>
                    <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                      {results.boundaryEquations.eq2} = 0
                    </div>
                  </div>
                  {results.boundaryEquations.eq3 && (
                    <div className="space-y-2">
                      <span className="text-white/70">MDC = 0</span>
                      <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                        {results.boundaryEquations.eq3} = 0
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.shearEquation && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Shear Equation</SectionTitle>
              <div className="p-6  backdrop-blur-sm rounded-xl border border-purple-500/20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-white/70">Simplified Equation</span>
                    <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                      {
                        results.shearEquation.simplifiedEquation
                          .simplifiedEquation
                      }
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/70">Theta Values</span>
                    <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-purple-500/20 space-y-2">
                      <div>EIθB = {results.solution.thetaB}</div>
                      <div>EIθC = {results.solution.thetaC}</div>
                      {results.solution.thetaD !== 0 && (
                        <div>EIθD = {results.solution.thetaD}</div>
                      )}
                      <div>EIδ = {results.solution.delta}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.finalMoments && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Final Moments</SectionTitle>
              <div className="p-6  backdrop-blur-sm rounded-xl border border-purple-500/20">
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(results.finalMoments).map(([key, value]) => (
                    <ResultCard key={key}>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400/90">{key}:</span>
                        <span className="font-mono font-medium text-indigo-300">
                          {value.toFixed(2)} kN⋅m
                        </span>
                      </div>
                    </ResultCard>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.horizontalReactions && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Horizontal Reactions</SectionTitle>
              <div className="p-6  backdrop-blur-sm rounded-xl border border-purple-500/20">
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(results.horizontalReactions).map(
                    ([key, value]) => (
                      <ResultCard key={key}>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400/90">{key}:</span>
                          <span className="font-mono font-medium text-indigo-300">
                            {value.toFixed(2)} kN
                          </span>
                        </div>
                      </ResultCard>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.verticalReactions && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Vertical Reactions</SectionTitle>
              <div className="p-6  backdrop-blur-sm rounded-xl border border-purple-500/20">
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(results.verticalReactions).map(
                    ([key, value]) => (
                      <ResultCard key={key}>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400/90">{key}:</span>
                          <span className="font-mono font-medium text-indigo-300">
                            {value.toFixed(2)} kN
                          </span>
                        </div>
                      </ResultCard>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.columnBMSF && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Column BMSF Values</SectionTitle>
              <div className="grid grid-cols-1 gap-4">
                {results.columnBMSF.map((bmsf, columnIndex) => (
                  <ResultCard key={columnIndex}>
                    <h4 className="text-lg font-medium text-white mb-4 pb-2 border-b border-purple-500/20">
                      Column {columnIndex + 1}
                    </h4>
                    <div className="space-y-6">
                      {bmsf.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-4">
                          <h5 className="text-md font-medium text-white/80">
                            Section: {section.sectionLabel}
                          </h5>
                          {section.x.map((x, i) => (
                            <div key={i} className="space-y-2">
                              <div className="text-white/70">
                                At x = {x.toFixed(2)} m:
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Shear Force:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {section.shearForce[i].toFixed(2)} kN
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Bending Moment:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {section.bendingMoment[i].toFixed(2)} kN⋅m
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </ResultCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {results.beamBMSF && (
          <ScrollReveal>
            <div className="space-y-4">
              <SectionTitle>Beam BMSF Values</SectionTitle>
              <div className="grid grid-cols-1 gap-4">
                {results.beamBMSF.map((bmsf, index) => (
                  <ResultCard key={index}>
                    <h4 className="text-lg font-medium text-white mb-4 pb-2 border-b border-purple-500/20">
                      Beam {index + 1}
                    </h4>
                    <div className="space-y-4">
                      {/* Only display first and last points for UDL */}
                      {bmsf.x.length === 21
                        ? // UDL case - show only start and end points
                          [0, bmsf.x.length - 1].map((i) => (
                            <div key={i} className="space-y-2">
                              <div className="text-white/70">
                                At x = {bmsf.x[i].toFixed(2)} m:
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Shear Force:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {bmsf.shearForce[i].toFixed(2)} kN
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Bending Moment:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {bmsf.bendingMoment[i].toFixed(2)} kN⋅m
                                </span>
                              </div>
                            </div>
                          ))
                        : // For other load types, show all points
                          bmsf.x.map((x, i) => (
                            <div key={i} className="space-y-2">
                              <div className="text-white/70">
                                At x = {x.toFixed(2)} m:
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Shear Force:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {bmsf.shearForce[i].toFixed(2)} kN
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-purple-400/90">
                                  Bending Moment:
                                </span>
                                <span className="font-mono font-medium text-indigo-300">
                                  {bmsf.bendingMoment[i].toFixed(2)} kN⋅m
                                </span>
                              </div>
                            </div>
                          ))}
                    </div>
                  </ResultCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
        {results && (
          <ScrollReveal>
            <FrameShearForceDiagram results={results} />
          </ScrollReveal>
        )}

        {results && (
          <ScrollReveal>
            <FrameBendingMomentDiagram results={results} />
          </ScrollReveal>
        )}
      </div>
    </motion.div>
  );
}
