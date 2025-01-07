"use client";

import {
  Code,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Monitor,
  Database,
  Layout,
} from "lucide-react";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "Firebase", "Redux"],
      image: "/api/placeholder/600/400",
      category: "Full Stack",
    },
    {
      title: "Task Management System",
      description:
        "Team collaboration tool with real-time updates and task tracking",
      tech: ["Angular", "Firebase", "REST API"],
      image: "/api/placeholder/600/400",
      category: "Web App",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing business metrics",
      tech: ["React", "D3.js", "Node.js"],
      image: "/api/placeholder/600/400",
      category: "Frontend",
    },
  ];

  const skills = {
    frontend: ["React", "Angular", "Redux", "HTML5/CSS3", "JavaScript"],
    backend: ["Node.js", "Python", "REST APIs", "C"],
    database: ["SQL", "NoSQL", "Firebase"],
    tools: ["Git", "Unit Testing", "Agile/Scrum", "Ajax"],
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030014]/70 backdrop-blur-md border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              WA
            </h1>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`transition-all duration-300 hover:text-blue-400 relative ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : "text-gray-100"
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                    )}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-gradient">
            Wais Almakaleh
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium">
            Software Engineer & Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:walmakaleh@mymail.lccc.edu"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              View My Work
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-100">
                A dedicated software engineer with experience in full-stack
                development and a passion for creating elegant solutions to
                complex problems. Currently pursuing an Associate in Science in
                Computer Science at Lehigh Carbon Community College.
              </p>
              <p className="text-lg text-gray-100">
                Selected for the prestigious Bucknell University Community
                College Scholars Program, demonstrating academic excellence and
                leadership abilities.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
                  Download Resume
                </button>
                <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Monitor, label: "Frontend Development" },
                { icon: Database, label: "Backend Development" },
                { icon: Layout, label: "UI/UX Design" },
                { icon: Code, label: "Clean Code" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="p-6 bg-gray-900 rounded-xl text-center border border-gray-700"
                >
                  <Icon size={32} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-sm font-medium text-gray-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Featured Projects
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-blue-600/50 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 border-2 border-white rounded-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 capitalize text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            I'm currently available for freelance work or full-time
            opportunities.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:walmakaleh@mymail.lccc.edu"
              className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Send Email
            </a>

            <a
              href="#"
              className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors text-lg font-medium"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 Wais Almakaleh. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:walmakaleh@mymail.lccc.edu"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}