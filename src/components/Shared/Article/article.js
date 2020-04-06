import React from 'react';
import './article.scss';

const Article = ({ content: { title, items } }) => {
  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <div className="article__content">
        {items.map((c, i) => (
          <p className="article__content--item" key={`${title}${i}`}>
            {c}
          </p>
        ))}
      </div>
    </article>
  );
};

export default Article;
