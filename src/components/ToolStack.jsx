"use client";

import { motion } from "framer-motion";
import { DiGit } from "react-icons/di";
import {
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiCanva,
  SiFirebase,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const toolStack = [
  {
    icon: <VscVscode className="w-12 h-12" />,
    title: "VS Code",
    color: "text-blue-500",
  },
  {
    icon: <DiGit className="w-12 h-12" />,
    title: "Git",
    color: "text-orange-600",
  },
  {
    icon: <SiGithub className="w-12 h-12" />,
    title: "GitHub",
    color: "text-white",
  },
  {
    icon: <SiFigma className="w-12 h-12" />,
    title: "Figma",
    color: "text-purple-400",
  },
  {
    icon: <SiCanva className="w-12 h-12" />,
    title: "Canva",
    color: "text-blue-400",
  },
  {
    icon: <SiPostman className="w-12 h-12" />,
    title: "Postman",
    color: "text-orange-500",
  },
  {
    icon: <SiFirebase className="w-12 h-12" />,
    title: "Firebase",
    color: "text-amber-500",
  },
  {
    icon: <SiVercel className="w-12 h-12" />,
    title: "Vercel",
    color: "text-white",
  },
  {
    icon: <SiNetlify className="w-12 h-12" />,
    title: "Netlify",
    color: "text-cyan-400",
  },
  {
    icon: <SiDocker className="w-12 h-12" />,
    title: "Docker",
    color: "text-blue-400",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ToolStack() {
  return (
    <section id="tools" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">
            Tools &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Platforms
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The software and services that power my development workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {toolStack.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-75 transition duration-300 blur" />

              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full">
                <div
                  className={`${tool.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {tool.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
                  {tool.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
