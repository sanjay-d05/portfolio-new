"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  {
    id: 1,
    name: "Healthcare",
    description:
      "We develop robust healthcare solutions that improve patient care with AI Diagnostics & Imaging and Predictive Patient Analytics, enhancing the accuracy of diagnostics and streamlining operations.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Finance",
    description:
      "Transforming financial services with high-security blockchain integration, real-time fraud detection systems, and AI-driven investment advisory platforms for modern banking.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Banking",
    description:
      "Empowering future-ready banking with cloud-native architectures, biometric authentication, and personalized customer experience modules through advanced data analytics.",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Restaurant",
    description:
      "We create dynamic restaurant apps and software that boost operational efficiency with AI-driven route optimization and improve supply chain visibility with Predictive Maintenance AI for fleets.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "eCommerce",
    description:
      "Scaling retail through intelligent inventory management, hyper-personalized recommendation engines, and seamless omni-channel payment integrations.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "SaaS",
    description:
      "We craft secure and scalable cloud-based SaaS applications that your businesses can effectively rely on for delivering consistent services, utilizing AI-Driven Customer Support Automation and Predictive Churn Analysis.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const IndustryItem = ({ industry, index, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-48% 0px -48% 0px", // Shorter active zone to prevent multiple activations
  });

  const isActive = index === activeIndex;

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className="min-h-[14vh] flex items-center justify-start transition-colors duration-500 py-10"
    >
      <motion.h2
        animate={{
          color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.25)",
          opacity: isActive ? 1 : 0.7,
          scale: isActive ? 1.05 : 0.98,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-semibold tracking-tight cursor-default text-left"
      >
        {industry.name}
      </motion.h2>
    </div>
  );
};

export default function Dummy() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Header section as seen in screenshot */}
      <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Solving Complex Challenges
            <br />
            Across Every Major Sector
          </h1>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium">
          Check All Industries <ArrowUpRight size={18} />
        </button>
      </section>

      {/* Main Interactive Section */}
      <section className="relative px-6 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Sticky Image (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-[30vh] h-[40vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={INDUSTRIES[activeIndex].id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black"
              >
                <img
                  src={INDUSTRIES[activeIndex].image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={INDUSTRIES[activeIndex].name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Subtle tag indicator inside the card */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/5">
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none">
                    Sector 0{INDUSTRIES[activeIndex].id}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center: Scrollable Industries (4 cols) - Reduced top padding so list starts sooner */}
          <div className="hidden lg:block lg:col-span-4 pl-10 pt-[20vh] pb-[50vh]">
            {INDUSTRIES.map((industry, index) => (
              <IndustryItem
                key={industry.id}
                industry={industry}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* Right: Sticky Description (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-[30vh] h-[40vh] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={INDUSTRIES[activeIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-8"
              >
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  {INDUSTRIES[activeIndex].description}
                </p>
                <button className="flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide">
                  Know More <ArrowUpRight size={18} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile View: Horizontal Carousel (scroll-x) */}
          <div className="lg:hidden col-span-1 -mx-6">
            <div
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.offsetWidth;
                const index = Math.round(scrollLeft / width);
                if (
                  index !== activeIndex &&
                  index >= 0 &&
                  index < INDUSTRIES.length
                ) {
                  setActiveIndex(index);
                }
              }}
              className="flex overflow-x-auto snap-x snap-mandatory px-6 pb-8 gap-6 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.id}
                  className="min-w-[85vw] snap-center flex flex-col gap-5"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                    <img
                      src={industry.image}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt={industry.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest">
                        Sector 0{industry.id}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 px-2">
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      {industry.name}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm line-clamp-3">
                      {industry.description}
                    </p>
                    <button className="flex items-center gap-2 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
                      Explore More <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator for Mobile */}
            <div className="flex justify-center gap-1.5 mt-2">
              {INDUSTRIES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${
                    activeIndex === idx ? "w-8 bg-white" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing at bottom */}
      <div className="h-[20vh]" />
    </main>
  );
}
