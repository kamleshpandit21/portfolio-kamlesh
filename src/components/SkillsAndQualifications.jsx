import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import "../assets/skills.css";

export default function SkillsAndQualifications() {
  const skills = [
    { name: "React.js", level: 90, icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs color="#68A063" /> },
    { name: "MySQL / MongoDB", level: 75, icon: <FaDatabase color="#FFD43B" /> },
    { name: "HTML / CSS / JS", level: 95, icon: <FaCode color="#f0db4f" /> },
    { name: "TypeScript", level: 70, icon: <FaCode color="#3178C6" /> },
  ];

  const qualifications = [
    {
      year: "2022 - 2024",
      title: "Master of Computer Applications (MCA)",
      institute: "XYZ University",
      desc: "Specialized in full-stack development, web apps, and modern frameworks.",
    },
    {
      year: "2019 - 2022",
      title: "Bachelor of Computer Science (B.Sc CS)",
      institute: "ABC College",
      desc: "Focused on programming fundamentals and database management.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    centerMode: false, // centerMode off
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="skills-qual-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <span className="gradient-text">Skills</span> & Qualifications
        </h2>

        {/* === Skill Slider === */}
       <Slider
  {...sliderSettings}
  className="skills-slider"
  slidesToShow={3}
  slidesToScroll={1}
  infinite={true}
  centerMode={true}
  centerPadding="40px"
>
  {skills.map((skill, i) => (
    <div key={i} className="skill-slide-wrapper">
      <motion.div
        className="skill-card glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
        whileHover={{ scale: 1.07 }}
      >
        <div className="icon">{skill.icon}</div>
        <h4>{skill.name}</h4>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <span className="percent">{skill.level}%</span>
      </motion.div>
    </div>
  ))}
</Slider>


        {/* === Qualifications Timeline === */}
        <div className="timeline-container mt-5">
          <h3 className="text-left mb-4 gradient-text">Qualifications</h3>
          <div className="timeline">
            {qualifications.map((q, i) => (
              <motion.div
                key={i}
                className="timeline-item glass-card"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h5 className="year">{q.year}</h5>
                  <h4>{q.title}</h4>
                  <p className="institute">{q.institute}</p>
                  <p className="desc">{q.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
