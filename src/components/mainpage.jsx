import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { FaReact, FaPython, FaDatabase, FaDocker, FaGraduationCap } from "react-icons/fa";
import { SiFastapi, SiJavascript, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-4 py-8 md:px-16 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-3xl font-bold">SR</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text"
          >
            Swamy R
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Full Stack Developer specializing in industrial IoT solutions, real-time dashboards, and smart systems.
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
              className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition-all"
            >
              <FiDownload /> Download Resume
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 border-2 border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black font-semibold transition-all"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex gap-6"
        >
          {[FaReact, FaPython, FaDatabase, FaDocker].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="text-3xl text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
            👨‍💻 About Me
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg mb-6">
            Versatile Full Stack Developer with expertise in Python and JavaScript, specializing in industrial IoT solutions. 
            Currently working at <span className="text-yellow-400">Central Manufacturing Technology Institute (CMTI)</span> developing 
            real-time monitoring systems and diagnostic tools for manufacturing environments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Project Associate @ CMTI</h4>
                  <p className="text-gray-400">Sept 2024 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    <li>Developed real-time vibration monitoring system</li>
                    <li>Integrated sensor data with FastAPI + PostgreSQL</li>
                    <li>Built diagnostic dashboards using Dash</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold">Graduate Engineering Trainee @ CMTI</h4>
                  <p className="text-gray-400">Aug 2024 - Sept 2024</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    <li>Developed VB.NET-based metrology tools</li>
                    <li>Tested precision measurement algorithms</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Education</h3>
              <div className="flex items-start gap-4 mb-6">
                <FaGraduationCap className="text-2xl text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Bachelor of Engineering - Computer Science</h4>
                  <p className="text-gray-400">Rajarajeshwari College of Engineering</p>
                  <p className="text-gray-400">2020 - 2024 | CGPA: 7.61</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Availability</h3>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Immediate Joiner</p>
                <p className="text-gray-300">Open to relocation & remote opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
            🚀 Featured Projects
          </span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Vibration Monitoring System",
              desc: "FastAPI + Dash platform analyzing vibration patterns with 95% fault detection accuracy in rotating machinery.",
              tech: "FastAPI, PostgreSQL, Dash, Python",
              metrics: "Real Time Monitoring and Fault Detection",
              color: "from-yellow-400 to-amber-500"
            },
            {
              title: "Smart Workshop Dashboard",
              desc: "MERN + PostgreSQL system monitoring machine health with predictive maintenance scheduling.",
              tech: "React, Node.js, MongoDB, Docker",
              metrics: "Machine Health Monitoring and Analytics, Emergency alerts, Smart Scheduling",
              color: "from-blue-400 to-cyan-500"
            },
            {
              title: "Role-Based Maintenance Tracker",
              desc: "PERN stack app with JWT auth for Admin, Supervisor, Operator roles.",
              tech: "PostgreSQL, Express, React, Node, JWT",
              metrics: "Streamlined maintenance workflows",
              color: "from-green-400 to-emerald-500"
            },
            {
              title: "VB.NET Metrology Tool",
              desc: "Precision measurement system for straightness error analysis in manufacturing.",
              tech: "VB.NET, Algorithms, Metrology",
              metrics: "Improved measurement accuracy",
              color: "from-purple-400 to-fuchsia-500"
            },
            {
              title: "Real-time Analytics Dashboard",
              desc: "React-based production monitoring with WebSocket connections for live data.",
              tech: "React, Chart.js, WebSockets, Node.js",
              metrics: "Real-time data with NV Gate",
              color: "from-red-400 to-pink-500"
            },
            {
              title: "Condition-Based Monitoring",
              desc: "Signal processing system for time/frequency domain feature extraction.",
              tech: "Python, Signal Processing, FastAPI",
              metrics: "Early fault detection capability",
              color: "from-indigo-400 to-blue-500"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${project.color} rounded-2xl p-0.5 shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="h-full bg-gray-900 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <p className="text-yellow-400 text-sm mb-2">✓ {project.metrics}</p>
                <p className="text-sm text-gray-400">Tech Stack: {project.tech}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
            🛠 Technical Skills
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Languages",
              skills: [
                { name: "Python", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "VB.NET", level: 70 }
              ]
            },
            {
              category: "Frontend & Backend",
              skills: [
                { name: "React.js", level: 85 },
                { name: "FastAPI", level: 90 },
                { name: "Node.js/Express", level: 80 },
                { name: "HTML/CSS", level: 75 }
              ]
            },
            {
              category: "Data & DevOps",
              skills: [
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 75 },
                { name: "Docker", level: 80 },
                { name: "Git", level: 85 }
              ]
            }
          ].map((group, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {[
            { name: "Dash", icon: <span className="text-3xl">📊</span> },
            { name: "Pandas", icon: <span className="text-3xl">🐼</span> },
            { name: "NumPy", icon: <span className="text-3xl">🧮</span> },
            { name: "Signal Processing", icon: <span className="text-3xl">📶</span> },
            { name: "JWT Auth", icon: <span className="text-3xl">🔐</span> },
            { name: "RBAC", icon: <span className="text-3xl">👥</span> },
            { name: "WebSockets", icon: <span className="text-3xl">🔌</span> },
            { name: "Data Acquisition", icon: <span className="text-3xl">📡</span> },
            { name: "Chart.js", icon: <span className="text-3xl">📈</span> },
            { name: "Industrial IoT", icon: <span className="text-3xl">🏭</span> }
          ].map((skill, i) => (
            <motion.div
              key={i}
              variants={skillItem}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 bg-gray-800 rounded-xl py-5 px-4 hover:bg-gray-700 transition-all cursor-default"
            >
              <div className="text-yellow-400">{skill.icon}</div>
              <span className="text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
              📬 Get In Touch
            </span>
          </h2>
          
          <p className="text-gray-300 mb-8 text-center text-lg">
            I'm actively looking for new opportunities and available immediately. 
            Let's discuss how I can contribute to your team!
          </p>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {[
              { icon: <FiMail />, text: "swamiaws85@gmail.com", href: "mailto:swamiaws85@gmail.com" },
              { icon: <FiPhone />, text: "+91 9019740523", href: "tel:+919019740523" },
              { icon: <FiLinkedin />, text: "linkedin.com/in/swamy-r-7103b0254", href: "https://www.linkedin.com/in/swamy-r-7103b0254" }
            ].map((contact, i) => (
              <motion.a
                key={i}
                variants={item}
                whileHover={{ x: 5 }}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors text-lg"
              >
                <span className="text-yellow-400 group-hover:text-yellow-300 text-xl transition-colors">
                  {contact.icon}
                </span>
                <span>{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:swamiaws85@gmail.com"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-300 transition-all"
            >
              <FiMail /> Email Me Now
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Swamy R. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}