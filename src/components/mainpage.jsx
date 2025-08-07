import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaDocker, FaGraduationCap } from "react-icons/fa";
import { SiFastapi, SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const ExperienceCard = ({ title, company, period, children }) => (
  <motion.div 
    variants={item}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-400/30 transition-all"
  >
    <h4 className="text-xl font-semibold mb-1">{title}</h4>
    <div className="flex justify-between items-start mb-4">
      <span className="text-yellow-400">{company}</span>
      <span className="text-gray-400 text-sm">{period}</span>
    </div>
    <ul className="space-y-2 text-gray-300">
      {children}
    </ul>
  </motion.div>
);

const SkillPill = ({ name, icon, level }) => {
  const levelClass = {
    advanced: "border-green-400 text-green-400",
    proficient: "border-blue-400 text-blue-400",
    intermediate: "border-yellow-400 text-yellow-400",
    familiar: "border-gray-400 text-gray-400"
  }[level];
  
  return (
    <motion.div 
      variants={skillItem}
      whileHover={{ y: -3 }}
      className={`flex items-center gap-2 border rounded-full px-4 py-2 text-sm ${levelClass}`}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8 md:px-16 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block mb-8"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold">SR</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text tracking-tight"
          >
            Swamy R
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
          >
            Full Stack Developer specializing in industrial IoT solutions and real-time systems
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/swamy.pdf"
              download
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <FiDownload /> Download Resume
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-6 py-3 rounded-lg font-medium transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group"
              title={tech.name}
            >
              {tech.icon}
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400">
            Professional Profile
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-200">About Me</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Full Stack Developer with expertise in building industrial IoT solutions and real-time monitoring systems. 
              Currently at <span className="text-yellow-400">Central Manufacturing Technology Institute (CMTI)</span>, 
              I develop cutting-edge tools that bridge the gap between manufacturing and digital technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in creating efficient, scalable systems that solve real-world problems in industrial environments. 
              I combine my knowledge of manufacturing processes with modern web technologies to deliver impactful solutions.
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Experience</h3>
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Education</h3>
              <div className="flex items-start gap-4 mb-6">
                <FaGraduationCap className="text-2xl text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Bachelor of Engineering - Computer Science</h4>
                  <p className="text-gray-400 text-sm">Rajarajeshwari College of Engineering</p>
                  <p className="text-gray-400 text-sm">2020 - 2024 | CGPA: 7.61</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Availability</h3>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="font-medium text-yellow-400">Immediate Joiner</p>
                <p className="text-gray-300 text-sm mt-1">Open to relocation & remote opportunities</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Core Competencies</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Industrial IoT Solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Real-time Data Processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Predictive Maintenance Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Manufacturing Process Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400">
            Technical Expertise
          </span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
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
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Databases & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="PostgreSQL" icon={<SiPostgresql />} level="proficient" />
              <SkillPill name="MongoDB" icon={<SiMongodb />} level="proficient" />
              <SkillPill name="Docker" icon={<FaDocker />} level="proficient" />
              <SkillPill name="Git" icon={<span>Git</span>} level="proficient" />
              <SkillPill name="CI/CD" icon={<span>CI/CD</span>} level="intermediate" />
            </div>
          </div>
          
          <div>
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
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="inline-block pb-2 border-b-2 border-yellow-400">
            Selected Projects
          </span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/30 transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">IMPACT</h4>
                  <p className="text-yellow-400 text-sm">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            Let's Connect
          </h2>
          
          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and would love to discuss how I can contribute to your team. 
            Feel free to reach out through any of the channels below.
          </p>
          
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
                content: "github.com/swamy85",
                href: "https://github.com/swamy85"
              }
            ].map((contact, i) => (
              <motion.a
                key={i}
                variants={item}
                whileHover={{ y: -3 }}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 hover:bg-gray-700 rounded-xl p-5 border border-gray-600 transition-all"
              >
                <div className="flex items-start gap-4">
                  {contact.icon}
                  <div>
                    <h4 className="font-medium text-gray-400">{contact.title}</h4>
                    <p className="text-gray-200 mt-1">{contact.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:swamiaws85@gmail.com"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <FiMail /> Send Me a Message
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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