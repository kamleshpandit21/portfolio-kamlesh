import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../assets/BackToTop.css'; // styling ke liye

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // 300px scroll ke baad button show hoga
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {visible && (
        <button onClick={scrollToTop}>
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
