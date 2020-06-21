import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import './breadcrumbs.scss';
import { v4 as uuid } from 'uuid';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((b, i) => {
        const isLast = breadcrumbs.length - 1 === i;
        return (
          <Fragment key={uuid()}>
            <Link
              key={uuid()}
              className={`breadcrumbs__link ${
                isLast ? 'breadcrumbs__link--disabled' : ''
              }`}
              to={b.url}
            >
              {b.name}
            </Link>
            {isLast ? null : <span className="breadcrumbs__separator">/</span>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
