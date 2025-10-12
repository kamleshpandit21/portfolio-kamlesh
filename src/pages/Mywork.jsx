import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/mywork.css";

// Example projects
const projects = [
  { id: 1, title: "React Dashboard", category: "Web", description: "Admin dashboard built with React.js", image: "/images/react-dashboard.png" },
  { id: 2, title: "Node API", category: "Backend", description: "REST API built with Node.js & Express", image: "/images/node-api.png" },
  { id: 3, title: "Portfolio Website", category: "Web", description: "Personal portfolio with modern UI", image: "/images/portfolio.png" },
  { id: 4, title: "E-commerce App", category: "Mobile", description: "React Native e-commerce app", image: "/images/ecommerce.png" },
  { id: 5, title: "MongoDB Project", category: "Backend", description: "Database project with MongoDB", image: "/images/mongo.png" },
];

const tabs = ["All", "Web", "Backend", "Mobile"];

export default function MyWork() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section className="mywork-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">My <span className="gradient-text">Work</span></h2>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
