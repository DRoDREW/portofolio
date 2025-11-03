"use client";
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>

        <div className="row">
          <div className="col-lg-6">
            <ScrollAnimation animation="fade-right" delay={200}>
              <h3 className="section-subtitle text-light mb-4">Who I Am</h3>
              <p className="lead text-secondary">
                Saya anak Teknik Informatika di Universitas Tarumanegara angkatan 24. Saya suka membuat desain proyek seperti aplikasi dan website. Saya suka mengubah ide menjadi realita.
              </p>
            </ScrollAnimation>
          </div>

          <div className="col-lg-6">
            <ScrollAnimation animation="fade-left" delay={400}>
              <h3 className="section-subtitle text-light mb-4">My Experience</h3>
              <ul className="list-unstyled text-secondary">
                <li className="mb-3">
                  <h5 className="text-primary">Frontend</h5>
                  <p>HTML, Bootstrap, JS, Next.js</p>
                </li>
                <li className="mb-3">
                  <h5 className="text-primary">Backend</h5>
                  <p>Node.js, PHP, SQL</p>
                </li>
                <li className="mb-3">
                  <h5 className="text-primary">App Dev</h5>
                  <p>Firebase, Flutter</p>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;