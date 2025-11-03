"use client";
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <ScrollAnimation animation="fade-down">
              <h1 className="hero-title display-4 mb-4">Welcome To My Portfolio</h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="hero-lines mb-4">
                <p className="hero-name">My name is Andrew</p>
                <p className="hero-subtitle lead">and I'm a web and app developer</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoom-in" delay={600}>
              <div className="d-flex justify-content-center gap-3">
                <a href="#projects" className="btn btn-glow btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-glow btn-outline-primary">Contact Me</a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;