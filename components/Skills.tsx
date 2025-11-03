"use client";
import ScrollAnimation from './ScrollAnimation';

const Skills = () => {
  const skills = [
    { name: "HTML5/CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Bootstrap", level: 85 },
    { name: "SQL", level: 75 },
    { name: "PHP", level: 70 },
    { name: "Firebase", level: 80 }
  ];

  return (
    <section id="skills">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">Skills</h2>
        </ScrollAnimation>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {skills.map((skill, index) => (
              <ScrollAnimation 
                key={index} 
                animation="fade-left" 
                delay={200 * index}
              >
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-light">{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ backgroundColor: 'var(--dark-color-darker)' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: 'var(--primary-color)'
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;