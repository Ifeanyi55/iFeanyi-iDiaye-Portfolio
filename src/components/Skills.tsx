import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "Natural Language Processing",
    "Generative AI",
    "Conversational AI",
    "Machine Learning",
    "Graph Data Science with Gephi",
    "R Programming",
    "R/Shiny Web Framework",
    "Python Programming",
    "Gradio Python Web Framework",
    "Web Development with HTML, CSS, and Javascript",
    "Neo4j Graph Database",
    "SQL"
  ];

  const cardGradients = [
    'linear-gradient(to right, #ff6b6b, #ff8787)',
    'linear-gradient(to right, #f06595, #f28ab2)',
    'linear-gradient(to right, #cc5de8, #d980ed)',
    'linear-gradient(to right, #845ef7, #a188f9)',
    'linear-gradient(to right, #5c7cfa, #819efc)',
    'linear-gradient(to right, #339af0, #5cb3f3)',
    'linear-gradient(to right, #22b8cf, #4ed1e2)',
    'linear-gradient(to right, #20c997, #4ddbb3)',
    'linear-gradient(to right, #51cf66, #78de89)',
    'linear-gradient(to right, #94d82d, #b0e55a)',
    'linear-gradient(to right, #fcc419, #ffd44d)',
    'linear-gradient(to right, #fd7e14, #ff9a4d)'
  ];

  return (
    <section id="skills" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center text-white">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4" style={{background: cardGradients[index % cardGradients.length]}}>
                <div className="card-body text-center text-dark fw-bold">
                  {skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
