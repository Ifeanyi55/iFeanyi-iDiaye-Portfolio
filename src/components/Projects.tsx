import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "OpenAlex4Gephi",
      description: "An open-source web tool that connects OpenAlex.org's scholarly data (250M+ works) with Gephi, enabling non-technical researchers to download and visualise author-to-publication networks without coding.",
      link: "https://openalex4gephi.netlify.app/"
    },
    {
        title: "SynthScope",
        description: "A multimodal web search tool that returns information as text, image, and translated audio.",
        link: "https://huggingface.co/spaces/Ifeanyi/SynthScope"
    },
    {
        title: "Convert2Docx",
        description: "An R package for converting PDF files to Word documents.",
        link: "https://github.com/Ifeanyi55/Convert2Docx"
    },
    {
        title: "GephiDatasets",
        description: "A collection of datasets for learning and using Gephi.",
        link: "https://github.com/Ifeanyi55/GephiDatasets"
    },
    {
        title: "Gradio-in-R",
        description: "A project showing how to build and deploy Gradio applications in the R programming language.",
        link: "https://github.com/Ifeanyi55/Gradio-in-R"
    },
    {
        title: "web_article-summarizer",
        description: "An application that provides summaries of web articles.",
        link: "https://github.com/Ifeanyi55/web_article-summarizer"
    },
    {
        title: "OpenAlex4NodeXL",
        description: "An open-source web tool that connects OpenAlex.org's scholarly data (250M+ works) with NodeXL, enabling non-technical researchers to download and visualise author-to-publication networks without coding.",
        link: "https://openalex4nodexl.netlify.app/"
    },
    {
        title: "Prompt-Generator",
        description: "Software for easily generating text-to-image prompts from phrases.",
        link: "https://ai-prompt-generator.netlify.app/"
    },
    {
        title: "Graphic-Walker-Data-Explorer",
        description: "A web application, with a tableau-like drag and drop interface, that makes data exploration fast and easy.",
        link: "https://graphic-walker-data-explorer.netlify.app/"
    }
  ];

  const cardGradients = [
    'linear-gradient(to right, #fcc419, #ffd44d)',
    'linear-gradient(to right, #94d82d, #b0e55a)',
    'linear-gradient(to right, #51cf66, #78de89)',
    'linear-gradient(to right, #20c997, #4ddbb3)',
    'linear-gradient(to right, #22b8cf, #4ed1e2)',
    'linear-gradient(to right, #339af0, #5cb3f3)',
    'linear-gradient(to right, #5c7cfa, #819efc)',
    'linear-gradient(to right, #845ef7, #a188f9)',
    'linear-gradient(to right, #cc5de8, #d980ed)'
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4" style={{background: cardGradients[index % cardGradients.length]}}>
                <div className="card-body text-dark">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
