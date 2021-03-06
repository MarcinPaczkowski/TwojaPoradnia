import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './mobileMenu.scss';
import MobileMenuLink from './MobileMenuLink/mobileMenuLink';
import MobileMenuSocialMedia from './MobileMenuSocialMedia/mobileMenuSocialMedia';
import MobileMenuContact from './MobileMenuContact/mobileMenuContact';
import ImageLink from '../../../../Shared/ImageLink/imageLink';
import getRoutingData from '../../../../../services/routingService';
import { mapCmsContactData } from '../../../../../utils/cmsMappers/contact/contactDataMapper';

const MobileMenu = ({ isActive }) => {
  const [routings, setRoutings] = useState([]);

  useEffect(() => {
    const routings = getRoutingData();
    setRoutings(routings);

    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isActive]);

  const {
    logo,
    allKontentItemContactdata: { nodes: cmsContactData },
  } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "Twoja-Pora-Dnia-logo.png" }) {
          childImageSharp {
            fixed(width: 110, height: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        allKontentItemContactdata {
          nodes {
            elements {
              fullname {
                value
              }
              email {
                value
              }
              address {
                value
              }
              nip {
                value
              }
              phone {
                value
              }
              facebookurl {
                value
              }
              instagramurl {
                value
              }
              youtubeurl {
                value
              }
            }
          }
        }
      }
    `
  );

  const contactData = mapCmsContactData(cmsContactData[0]);

  if (!isActive) {
    return null;
  }

  const imageData = {
    link: '/',
    src: logo.childImageSharp.fixed,
    alt: 'Twoja Poradnia Logo',
  };

  const socialMedias = [
    { name: 'facebook', link: contactData.facebookUrl },
    { name: 'instagram', link: contactData.instagramUrl },
    { name: 'youtube', link: contactData.youtubeUrl },
  ].filter((sm) => sm.link !== '');

  const clickHandler = () => {
    const nav = window.document.getElementsByClassName('mobile-menu')[0];
    nav.classList.remove('animate__slideInRight');
    nav.classList.add('animate__slideOutRight');
    const icon = window.document.getElementsByClassName(
      'mobile-menu-icon__checkbox'
    )[0];
    icon.style.pointerEvents = 'none';
    icon.click();
    setTimeout(() => {
      icon.style.pointerEvents = 'all';
    }, 800);
  };

  return (
    <nav
      className="mobile-menu animate__animated animate__slideInRight"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="mobile-menu__logo">
        <ImageLink imageData={imageData} />
      </div>
      <ul className="mobile-menu__links">
        {routings.map((r, i) => (
          <MobileMenuLink
            key={`${r.name}-${i}`}
            routing={r}
            click={() => clickHandler()}
          />
        ))}
      </ul>
      <div className="mobile-menu__social-media">
        {socialMedias.map((sm, i) => (
          <MobileMenuSocialMedia
            key={`${sm.name}-${i}`}
            socialMedia={sm}
          ></MobileMenuSocialMedia>
        ))}
      </div>
      <div className="mobile-menu__contact">
        <MobileMenuContact
          email={contactData.email}
          phone={contactData.phone}
        ></MobileMenuContact>
      </div>
    </nav>
  );
};

export default MobileMenu;
