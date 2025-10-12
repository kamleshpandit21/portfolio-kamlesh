
import myPhoto from '../assets/myphoto.png';
function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          
          {/* Image Section */}
                        <img
                src={myPhoto}
                alt="Kamlesh"
                className="about-img rounded-circle shadow-glow" data-aos='fade-up'
                />


          {/* Text Section */}
          <div className="col-md-7 text-center text-md-start" data-aos='fade-up' >
            <h2 className="section-title mb-3">About <span className="gradient-text">Me</span></h2>
            <p className="lead">
              I'm <strong>Kamlesh</strong>, a passionate <span className="highlight">React Developer</span> who loves crafting
              smooth, responsive, and visually stunning web interfaces. I focus on
              creating experiences that are both <span className="highlight">aesthetic</span> and <span className="highlight">user-friendly</span>.
            </p>
            <p>
              With strong skills in modern frontend tools like <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind / Bootstrap</strong>,
              I aim to build seamless digital solutions that inspire users and drive performance.
            </p>
            <a href="#projects" className="btn btn-glow mt-3">Explore My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
