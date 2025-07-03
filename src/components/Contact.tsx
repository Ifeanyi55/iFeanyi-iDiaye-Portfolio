import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through the following platforms:</p>
        <a href="https://www.linkedin.com/in/ifeanyi-idiaye-09523abb/" className="btn btn-light me-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Ifeanyi55" className="btn btn-light me-2" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://stackoverflow.com/users/17551958/idiaye" className="btn btn-light" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </div>
    </section>
  );
};

export default Contact;