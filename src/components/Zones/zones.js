import React from 'react';
import './zones.scss';
import Layout from '../layout/layout';
import Zone from './Zone/zone';
import parentImage from '../../images/parent.png';
import childrenImage from '../../images/children.png';

const zone = (imageUrl, imageAlt, name, goToUrl) => {
  return {
    imageUrl,
    imageAlt,
    name,
    goToUrl,
  };
};

const Zones = () => {
  return (
    <Layout>
      <div className="zones">
        <div className="zones__background"></div>
        <div className="zones__items">
          <div className="zones__items--item">
            <Zone
              zone={zone(parentImage, 'Rodzice', 'Strefa rodzica', '/rodzice')}
            ></Zone>
          </div>
          <div className="zones__items--item">
            <Zone
              zone={zone(childrenImage, 'Dzieci', 'Strefa dziecka', '/dzieci')}
            ></Zone>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zones;
