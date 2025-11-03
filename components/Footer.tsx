const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Contact Info</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:andrewgeorge0619@gmail.com" className="text-decoration-none text-secondary">
                  andrewgeorge0619@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-phone me-2"></i>
                <a href="tel:08123456798" className="text-decoration-none text-secondary">
                  08123456798
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Jl. Letjen S. Parman No.1, RT.6/RW.16, Tomang, Kec. Grogol Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11440
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Social Media</h5>
            <div className="d-flex gap-3">
              <a href="https://github.com/yourusername" className="text-secondary fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-secondary fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com/yourusername" className="text-secondary fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="text-light mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-secondary text-decoration-none">About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-secondary text-decoration-none">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#skills" className="text-secondary text-decoration-none">Skills</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <hr className="bg-secondary" />
            <p className="text-secondary mb-0">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;