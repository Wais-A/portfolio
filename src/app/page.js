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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
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
                    className={`transition-colors hover:text-blue-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Wais Almakaleh
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                A dedicated software engineer with experience in full-stack
                development and a passion for creating elegant solutions to
                complex problems. Currently pursuing an Associate in Science in
                Computer Science at Lehigh Carbon Community College.
              </p>
              <p className="text-lg text-gray-300">
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
                  className="p-6 bg-gray-800 rounded-xl text-center"
                >
                  <Icon size={32} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 border-2 border-white rounded-lg">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Wais Almakaleh. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:walmakaleh@mymail.lccc.edu"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
