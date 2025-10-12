import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LearningTracker from "./pages/LearningTracker";
import Login from "./pages/Login";
import SkillsAndQualifications from "./components/SkillsAndQualifications";
import AOS from "aos";
import "aos/dist/aos.css";
import MyWork from "./pages/Mywork";
import BlogPage from "./pages/BlogPage";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-wrapper text-light">
      <Header />

      <main className="container mt-4">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <SkillsAndQualifications />
                <Projects />
                <Blog />
                <Contact />
              </>
            }
          />

          {/* Blog List Page */}
          <Route path="/blog" element={<BlogPage />} />

          {/* Blog Detail Page */}
          <Route path="/blog/:id" element={<BlogPage />} />

          {/* My Work Page */}
          <Route path="/mywork" element={<MyWork />} />

          {/* Learning Tracker Page */}
          <Route path="/learning-tracker" element={<LearningTracker />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
