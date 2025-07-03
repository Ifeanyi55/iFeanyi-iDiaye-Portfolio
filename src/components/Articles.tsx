import React from 'react';

const Articles: React.FC = () => {
  const articles = [
    {
      title: "How to Chat with Images using Google's Gemini AI",
      link: "https://influencermagazine.uk/2023/12/how-to-chat-with-images-using-googles-gemini-ai",
      publication: "Influencer UK"
    },
    {
      title: "10 Python Dictionary Methods You Should Know",
      link: "https://influencermagazine.uk/2022/06/10-python-dictionary-methods-you-should-know/",
      publication: "Influencer UK"
    }
  ];

  const cardGradients = [
    'linear-gradient(to right, #845ef7, #a188f9)',
    'linear-gradient(to right, #cc5de8, #d980ed)'
  ];

  return (
    <section id="articles" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Published Articles</h2>
        <div className="row justify-content-center">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4" style={{background: cardGradients[index % cardGradients.length]}}>
                <div className="card-body text-dark">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.publication}</p>
                  <a href={article.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Read Article</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
