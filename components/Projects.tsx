"use client";
import ScrollAnimation from './ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: "Project Website Wayang",
      description: "Website tentang wayang bernama Wayantara yang menampilkan wayang dari berbagai daerah Indonesia",
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project Aplikasi Mobile Bank",
      description: "Aplikasi mobile banking bernama Vautbank",
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "Project Fullstack Website Mahasiswa",
      description: "Website mahasiswa bernama Lintur",
      image: "/project3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title">My Projects</h2>
        </ScrollAnimation>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <ScrollAnimation 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 200}
              >
                <div className="card h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      View Project
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;