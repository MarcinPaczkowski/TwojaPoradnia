import React from 'react';
import { Link } from 'gatsby';
import './breadcrumbs.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <ul
      className="breadcrumbs"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {breadcrumbs.map((b, i) => {
        const isLast = breadcrumbs.length - 1 === i;
        return (
          <li
            className="breadcrumbs__item"
            key={b.name}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              className={`breadcrumbs__link ${
                isLast ? 'breadcrumbs__link--disabled' : ''
              }`}
              to={b.url}
              itemProp="item"
            >
              <span itemProp="name">{b.name}</span>
              <meta itemProp="position" content={i + 1} />
            </Link>
            {isLast ? null : <span className="breadcrumbs__separator">/</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
