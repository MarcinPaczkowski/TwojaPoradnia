import React from 'react';
import './aboutMeContent.scss';
import Article from '../../Shared/Article/article';

const AboutMeContent = ({ content }) => {
  return content.map((c, i) =>
    i % 2 ? (
      <div key={`AboutArticle${i}`} className="about-me-content">
        <div className="about-me-content__odd">
          <div className="about-me-content__odd--image"></div>
          <div className="about-me-content__odd--article">
            <Article content={c}></Article>
          </div>
        </div>
      </div>
    ) : (
      <div key={`AboutArticle${i}`} className="about-me-content">
        <div className="about-me-content__even">
          <div className="about-me-content__even--image"></div>
          <div className="about-me-content__even--article">
            <Article content={c}></Article>
          </div>
        </div>
      </div>
    )
  );
};

export default AboutMeContent;
