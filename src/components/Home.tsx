import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="d-flex align-items-center text-center">
      <div className="container">
        <img src="/Ifeanyi.jpg" alt="Ifeanyi Diaye" className="profile-pic mb-4" />
        <h1 className="gradient-text">Ifeanyichukwu Emeka Idiaye</h1>
        <p className="lead">Internationally renowned Data Scientist and Software Developer | AI Guild Member | Certified expert in Conversational & Generative AI | Google Developer Expert</p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Home;