import React from 'react';
import './article.scss';
import parse from 'html-react-parser';

const Article = ({ content: { title, description } }) => {
  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <div className="article__content">{parse(description)}</div>
    </article>
  );
};

export default Article;
