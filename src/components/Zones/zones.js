import React from 'react';
import './zones.scss';
import Layout from '../layout/layout';

const Zones = () => (
  <Layout>
    <div className="zones">
      <div className="zones__background"></div>
      <div className="zones__items">
        <div className="zones__items--item"></div>
        <div className="zones__items--item"></div>
      </div>
    </div>
  </Layout>
);

export default Zones;
