'use client';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import CustomAlert from './CustomAlert';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <CustomAlert 
        message="Thank you! Your message has been sent successfully." 
        isVisible={showAlert} 
        onClose={() => setShowAlert(false)}
      />
      <div className="container">
        <ScrollAnimation>
          <h2 className="section-title text-center">Contact Me</h2>
        </ScrollAnimation>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ScrollAnimation animation="fade-up" delay={200}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-light">Name</label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    style={{
                      backgroundColor: formData.name ? 'white' : 'var(--dark-color-lighter)',
                      color: formData.name ? 'black' : 'white',
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">Email</label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    style={{
                      backgroundColor: formData.email ? 'white' : 'var(--dark-color-lighter)',
                      color: formData.email ? 'black' : 'white',
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-light">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;