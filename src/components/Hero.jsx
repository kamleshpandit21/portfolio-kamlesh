import { motion } from "framer-motion";
import { ReactTyped } from "react-typed"; // ✅ Correct import
import "aos/dist/aos.css";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center"
      data-aos="fade-up"
    >
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="fw-bold display-3 mb-3">
            Hi, I’m <span className="gradient-text">Kamlesh</span>
          </h1>

          {/* ✅ Corrected Typing animation */}
          <h3 className="typing-text mb-4">
            <ReactTyped
              strings={[
                "React Developer 💻",
                "Frontend Engineer 🚀",
                "UI/UX Enthusiast 🎨",
                "Creative Coder ✨",
              ]}
              typeSpeed={60}
              backSpeed={35}
              loop
            />
          </h3>

          <p className="lead mb-4 mt-3">
            Passionate about building{" "}
            <span className="highlight">smooth</span>,{" "}
            <span className="highlight">fast</span>, and{" "}
            <span className="highlight">interactive</span> web experiences 🚀
          </p>

          <motion.a
            href="#projects"
            className="btn btn-glow mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Floating background effects */}
      <div className="floating-blur"></div>
      <div className="floating-blur blur2"></div>
      <div className="floating-blur blur3"></div>
    </section>
  );
}

export default Hero;
