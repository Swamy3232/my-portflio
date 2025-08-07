import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowRight } from "react-icons/fi";
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaDocker, FaGraduationCap } from "react-icons/fa";
import { SiFastapi, SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
// import { FiDownload, FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowRight } from "react-icons/fi";
// import { FaReact, FaPython, FaNodeJs, FaDatabase, FaDocker, FaGraduationCap } from "react-icons/fa";
// import { SiFastapi, SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

// Add this new component for the welcome character
const WelcomeCharacter = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }}
    whileHover={{
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    }}
    className="absolute right-8 top-8 md:right-16 md:top-16 z-10 cursor-pointer"
  >
    <div className="relative">
      {/* Speech bubble */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          transition: { 
            delay: 2,
            type: "spring",
            stiffness: 200,
            damping: 10
          }
        }}
        className="absolute -top-16 -left-32 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg"
      >
        <p className="text-sm font-medium">Hey there! 👋</p>
        <p className="text-xs">Welcome to my portfolio!</p>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
      </motion.div>
      
      {/* Character */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
          {/* Face */}
          <div className="relative w-10 h-10">
            {/* Eyes */}
            <div className="absolute top-2 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute top-2 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
            
            {/* Mouth - animated smile */}
            <motion.div
              animate={{
                d: [
                  "M5 15 Q10 10 15 15", // Smile
                  "M5 15 Q10 18 15 15", // Neutral
                  "M5 15 Q10 10 15 15"  // Smile
                ],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className="absolute bottom-2 left-0 right-0"
            >
              <svg width="20" height="10" viewBox="0 0 20 10">
                <path 
                  fill="none" 
                  stroke="#1f2937" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  d="M5 15 Q10 10 15 15"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
// Enhanced animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 150,
      damping: 10,
      duration: 0.5
    } 
  }
};

const ExperienceCard = ({ title, company, period, children }) => (
  <motion.div 
    variants={item}
    whileHover={{
      y: -8,
      transition: { duration: 0.3 }
    }}
    className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <h4 className="text-xl font-semibold mb-1">{title}</h4>
      <div className="flex justify-between items-start mb-4">
        <span className="text-yellow-400">{company}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>
      <ul className="space-y-2 text-gray-300">
        {children}
      </ul>
    </div>
  </motion.div>
);

const SkillPill = ({ name, icon, level }) => {
  const levelClass = {
    advanced: "from-green-500/10 to-green-600/10 border-green-500/30 text-green-400 hover:shadow-green-500/20",
    proficient: "from-blue-500/10 to-blue-600/10 border-blue-500/30 text-blue-400 hover:shadow-blue-500/20",
    intermediate: "from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 text-yellow-400 hover:shadow-yellow-500/20",
    familiar: "from-gray-500/10 to-gray-600/10 border-gray-500/30 text-gray-400 hover:shadow-gray-500/20"
  }[level];
  
  return (
    <motion.div 
      variants={skillItem}
      whileHover={{ 
        y: -5,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`flex items-center gap-2 bg-gradient-to-br ${levelClass} border rounded-xl px-4 py-3 text-sm font-medium hover:shadow-lg transition-all`}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, technologies, impact }) => (
  <motion.div
    variants={item}
    whileHover={{ 
      y: -8,
      transition: { duration: 0.3 }
    }}
    className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all group h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-yellow-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, j) => (
              <motion.span 
                key={j}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-gray-700/70 text-gray-300 px-3 py-1 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-gray-700/50 group-hover:border-yellow-400/30 transition-colors">
          <h4 className="text-sm font-medium text-gray-400 mb-1">IMPACT</h4>
          <p className="text-yellow-400 text-sm">{impact}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white px-4 py-8 md:px-16 font-sans overflow-x-hidden">
      {/* Welcome Character Component */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: { 
            delay: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }
        }}
        whileHover={{
          y: -10,
          transition: { type: "spring", stiffness: 300 }
        }}
        className="fixed right-8 top-8 md:right-16 md:top-16 z-10 cursor-pointer"
      >
        <div className="relative">
          {/* Speech bubble */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              transition: { 
                delay: 2,
                type: "spring",
                stiffness: 200,
                damping: 10
              }
            }}
            className="absolute -top-16 -left-32 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg"
          >
            <p className="text-sm font-medium">Hey there! 👋</p>
            <p className="text-xs">Welcome to my portfolio!</p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
          </motion.div>
          
          {/* Character */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
              {/* Face */}
              <div className="relative w-10 h-10">
                {/* Eyes */}
                <div className="absolute top-2 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="absolute top-2 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
                
                {/* Mouth - animated smile */}
                <motion.div
                  animate={{
                    d: [
                      "M5 15 Q10 10 15 15", // Smile
                      "M5 15 Q10 18 15 15", // Neutral
                      "M5 15 Q10 10 15 15"  // Smile
                    ],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  className="absolute bottom-2 left-0 right-0"
                >
                  <svg width="20" height="10" viewBox="0 0 20 10">
                    <path 
                      fill="none" 
                      stroke="#1f2937" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      d="M5 15 Q10 10 15 15"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] mb-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          className="text-center max-w-4xl relative"
        >
          {/* Floating particles background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.3,
              transition: { delay: 1.5 }
            }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: [0, Math.random() * 40 - 20],
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="absolute rounded-full bg-yellow-400"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  opacity: Math.random() * 0.5 + 0.1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 blur-md opacity-30 animate-pulse"></div>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 p-1 shadow-lg relative">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold">SR</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text tracking-tight"
          >
            Swamy R
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.5, 
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            className="text-xl md:text-2xl text-gray-300 mb-6 font-light max-w-2xl mx-auto"
          >
            Full Stack Developer specializing in industrial IoT solutions and real-time systems
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 1, 
                duration: 0.8 
              }
            }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/swamy.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <FiDownload /> Download Resume
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(234, 179, 8, 0.1)",
                boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-6 py-3 rounded-lg font-medium transition-all"
            >
              Contact Me <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 1.5 }
          }}
          className="mt-24 flex flex-wrap justify-center gap-6 max-w-2xl mx-auto"
        >
          {[
            { icon: <FaPython className="text-3xl" />, name: "Python" },
            { icon: <SiJavascript className="text-3xl" />, name: "JavaScript" },
            { icon: <FaReact className="text-3xl" />, name: "React" },
            { icon: <SiFastapi className="text-3xl" />, name: "FastAPI" },
            { icon: <FaNodeJs className="text-3xl" />, name: "Node.js" },
            { icon: <SiPostgresql className="text-3xl" />, name: "PostgreSQL" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 0.3
                }
              }}
              whileHover={{
                y: -20,
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group cursor-pointer"
              title={tech.name}
            >
              {tech.icon}
              <motion.span 
                className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400 relative">
            Professional Profile
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 origin-left"
            />
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.8 }
          }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <motion.h3 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-200"
            >
              About Me
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm a Full Stack Developer with expertise in building industrial IoT solutions and real-time monitoring systems. 
              Currently at <span className="text-yellow-400">Central Manufacturing Technology Institute (CMTI)</span>, 
              I develop cutting-edge tools that bridge the gap between manufacturing and digital technology.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              My passion lies in creating efficient, scalable systems that solve real-world problems in industrial environments. 
              I combine my knowledge of manufacturing processes with modern web technologies to deliver impactful solutions.
            </motion.p>
            
            <div className="pt-6">
              <motion.h3 
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring" }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-gray-200 mb-6"
              >
                Experience
              </motion.h3>
              <div className="space-y-6">
                <ExperienceCard 
                  title="Project Associate" 
                  company="Central Manufacturing Technology Institute (CMTI)" 
                  period="Sept 2024 - Present"
                >
                  <li>Developed real-time vibration monitoring system with 95% fault detection accuracy</li>
                  <li>Designed FastAPI backend with PostgreSQL for industrial data acquisition</li>
                  <li>Built diagnostic dashboards using Plotly Dash for machine health analysis</li>
                </ExperienceCard>
                
                <ExperienceCard 
                  title="Graduate Engineering Trainee" 
                  company="Central Manufacturing Technology Institute (CMTI)" 
                  period="Aug 2024 - Sept 2024"
                >
                  <li>Developed VB.NET-based metrology tools for precision measurement</li>
                  <li>Implemented algorithms for straightness error analysis in manufacturing</li>
                </ExperienceCard>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Education</h3>
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                  >
                    <FaGraduationCap className="text-2xl text-yellow-400 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium">Bachelor of Engineering - Computer Science</h4>
                    <p className="text-gray-400 text-sm">Rajarajeshwari College of Engineering</p>
                    <p className="text-gray-400 text-sm">2020 - 2024 | CGPA: 7.61</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Availability</h3>
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-lg border border-gray-600/50">
                  <p className="font-medium text-yellow-400">Immediate Joiner</p>
                  <p className="text-gray-300 text-sm mt-1">Open to relocation & remote opportunities</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Core Competencies</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Industrial IoT Solutions",
                    "Real-time Data Processing",
                    "Predictive Maintenance Systems",
                    "Full Stack Development",
                    "Manufacturing Process Integration"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-yellow-400 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400 relative">
            Technical Expertise
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 origin-left"
            />
          </span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="Python" icon={<FaPython />} level="advanced" />
              <SkillPill name="JavaScript" icon={<SiJavascript />} level="proficient" />
              <SkillPill name="TypeScript" icon={<SiTypescript />} level="intermediate" />
              <SkillPill name="React" icon={<FaReact />} level="proficient" />
              <SkillPill name="FastAPI" icon={<SiFastapi />} level="advanced" />
              <SkillPill name="Node.js" icon={<FaNodeJs />} level="proficient" />
              <SkillPill name="Express" icon={<SiExpress />} level="proficient" />
              <SkillPill name="VB.NET" icon={<span className="text-sm">VB</span>} level="intermediate" />
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Databases & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="PostgreSQL" icon={<SiPostgresql />} level="proficient" />
              <SkillPill name="MongoDB" icon={<SiMongodb />} level="proficient" />
              <SkillPill name="Docker" icon={<FaDocker />} level="proficient" />
              <SkillPill name="Git" icon={<span>Git</span>} level="proficient" />
              <SkillPill name="CI/CD" icon={<span>CI/CD</span>} level="intermediate" />
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="Pandas" icon={<span>🐼</span>} level="advanced" />
              <SkillPill name="Plotly Dash" icon={<span>📊</span>} level="advanced" />
              <SkillPill name="Signal Processing" icon={<span>📶</span>} level="proficient" />
              <SkillPill name="WebSockets" icon={<span>🔌</span>} level="proficient" />
              <SkillPill name="JWT Auth" icon={<span>🔐</span>} level="proficient" />
              <SkillPill name="Tailwind CSS" icon={<SiTailwindcss />} level="proficient" />
              <SkillPill name="Industrial IoT" icon={<span>🏭</span>} level="advanced" />
              <SkillPill name="Data Acquisition" icon={<span>📡</span>} level="proficient" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold mb-16 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400 relative">
            Selected Projects
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 origin-left"
            />
          </span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Industrial Vibration Monitoring System",
              description: "Real-time platform for detecting faults in rotating machinery with 95% accuracy using FastAPI and Dash.",
              technologies: ["FastAPI", "PostgreSQL", "Plotly Dash", "Python", "Signal Processing"],
              impact: "Reduced unplanned downtime through early fault detection"
            },
            {
              title: "Smart Workshop Dashboard",
              description: "Comprehensive monitoring system for machine health with predictive maintenance scheduling.",
              technologies: ["React", "Node.js", "MongoDB", "Docker", "WebSockets"],
              impact: "Improved maintenance efficiency through smart scheduling"
            },
            {
              title: "Role-Based Maintenance Tracker",
              description: "PERN stack application with JWT authentication for different user roles in manufacturing environments.",
              technologies: ["PostgreSQL", "Express", "React", "Node.js", "JWT"],
              impact: "Streamlined maintenance workflows across multiple departments"
            },
            {
              title: "Precision Metrology Tool",
              description: "VB.NET application for straightness error analysis in manufacturing quality control.",
              technologies: ["VB.NET", "Algorithms", "Metrology"],
              impact: "Assisted Improved measurement accuracy compared to manual methods"
            }
          ].map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              impact={project.impact}
            />
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-center text-gray-200"
            >
              Let's Connect
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4 }
              }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 text-center max-w-2xl mx-auto leading-relaxed"
            >
              I'm currently open to new opportunities and would love to discuss how I can contribute to your team. 
              Feel free to reach out through any of the channels below.
            </motion.p>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6 mb-12"
            >
              {[
                { 
                  icon: <FiMail className="text-2xl text-yellow-400" />, 
                  title: "Email", 
                  content: "swamiaws85@gmail.com",
                  href: "mailto:swamiaws85@gmail.com"
                },
                { 
                  icon: <FiPhone className="text-2xl text-yellow-400" />, 
                  title: "Phone", 
                  content: "+91 9019740523",
                  href: "tel:+919019740523"
                },
                { 
                  icon: <FiLinkedin className="text-2xl text-yellow-400" />, 
                  title: "LinkedIn", 
                  content: "linkedin.com/in/swamy-r-7103b0254",
                  href: "https://www.linkedin.com/in/swamy-r-7103b0254"
                },
                { 
                  icon: <FiGithub className="text-2xl text-yellow-400" />, 
                  title: "GitHub", 
                  content: "https://github.com/Swamy3232",
                  href: "https://github.com/Swamy3232"
                }
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  variants={item}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "rgba(30, 41, 59, 0.5)"
                  }}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-5 border border-gray-600/50 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    {contact.icon}
                    <div>
                      <h4 className="font-medium text-gray-400">{contact.title}</h4>
                      <p className="text-gray-200 mt-1">{contact.content}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.6 }
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.4)"
                }}
                whileTap={{ scale: 0.97 }}
                href="mailto:swamiaws85@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <FiMail /> Send Me a Message
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { delay: 0.8 }
          }}
          viewport={{ once: true }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Swamy R. All rights reserved.</p>
          <p className="mt-2">Designed and built with React & Tailwind CSS</p>
        </motion.div>
      </section>
    </main>
  );
}