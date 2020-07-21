import React from 'react';
import './class.scss';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import HorizontalTile from '../Shared/HorizontalTile/horizontalTile';
import TileImagePosition from '../Shared/HorizontalTile/tileImagePosition';
import HorizontalText from '../Shared/HorizontalText/horizontalText';

const Class = ({ classDetails }) => {
  const content1 = {
    title: 'Tytuł',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus dignissimos eligendi similique amet quo harum, minus soluta libero vero doloribus iste a. Adipisci qui vel dicta veniam eius maxime!
     Sapiente quis nisi dolores magni, ipsum minima hic expedita sit aspernatur consectetur eveniet illum beatae repellat atque facere excepturi alias sed fuga rerum aperiam eius adipisci quasi. A, labore quibusdam.
    Molestias facilis incidunt deserunt officia itaque dignissimos repudiandae ipsum. Qui, sunt. Vel repellendus nisi dolor, excepturi eaque minus eveniet iusto aliquid doloribus ex perspiciatis assumenda, sint ratione labore facilis voluptatibus?
    Similique itaque consectetur accusantium quasi libero. Velit laudantium asperiores harum labore molestias, totam non. Aliquam asperiores at alias, pariatur quasi aut? Sapiente nulla natus laboriosam quod pariatur? Voluptatem, adipisci id.</p>`,
    image: classDetails.image,
  };
  const content2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere a autem fuga et suscipit accusamus, doloribus cum culpa maxime repellat reprehenderit nihil. Beatae illo est pariatur voluptatem quia quibusdam.Illum beatae impedit non id laudantium cum optio tenetur vel voluptatibus vitae excepturi temporibus nihil consectetur necessitatibus asperiores, velit consequatur quas? Cumque pariatur ea molestias amet facilis, dolor eligendi alias?`;

  return (
    <div className="class">
      <div className="class__background">
        <div className="class__container">
          <div className="class__section">
            <HeaderTitle title={classDetails.title} />
          </div>
        </div>
      </div>
      <div className="class__background class__background--blue">
        <div className="class__container">
          <div className="class__section">
            <HorizontalTile
              imagePosition={TileImagePosition.LEFT}
              content={content1}
            />
          </div>
        </div>
      </div>
      <div className="class__background">
        <div className="class__container">
          <div className="class__section">
            <HorizontalText text={content2} />
          </div>
        </div>
      </div>
      <div className="class__background class__background--blue">
        <div className="class__container">
          <div className="class__section">
            <HorizontalText text={content2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
