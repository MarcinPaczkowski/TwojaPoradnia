import React from 'react';
import './entryBlog.scss';
import parse from 'html-react-parser';
import Section from '../Layout/Section/section';
import Headline from '../Shared/Headline/headline';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const EntryBlog = ({
  blog: { headlineTitle, headlineBackgroundImage, publishDate, entry, author },
}) => {
  return (
    <div className="entry-blog">
      <NegativeMarginWrapper>
        <Section isWide>
          <div className="entry-blog__headline">
            <Headline
              title={headlineTitle}
              backgroundImage={headlineBackgroundImage}
              author={author}
              publishDate={publishDate}
            />
          </div>
        </Section>
      </NegativeMarginWrapper>
      <NegativeMarginWrapper>
        <Section>
          <div className="entry-blog__entry">{parse(entry)}</div>
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default EntryBlog;
