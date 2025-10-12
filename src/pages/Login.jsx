import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "../assets/login.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "123456") {
      alert("✅ Login Successful!");
      navigate("/");
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <section className="login-wrapper  d-flex align-items-center justify-content-center">
      {/* === Floating Background Effects === */}
      <div className="login-glow glow1"></div>
      <div className="login-glow glow2"></div>
      <div className="login-glow glow3"></div>

      {/* === Main Login Card === */}
      <motion.div
        className="login-card glass-card p-5"
        data-aos="zoom-in"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-4 gradient-text fw-bold">
          Welcome Back 👋
        </h2>
        <p className="text-center text-light mb-4 opacity-75">
          Please login to continue your learning journey 🚀
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="form-control neon-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="form-control neon-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-glow w-100"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center mt-4 text-light small">
          Don’t have an account?{" "}
          <span className="text-gradient">Sign up soon!</span>
        </p>
      </motion.div>
    </section>
  );
}
