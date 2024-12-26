import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import logo from '../img/logo.png';
import facebook from '../img/icons/facebook.svg';
import twitter from '../img/icons/twitter.svg';
import instagram from '../img/icons/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer__logo-container footer__top-left">
          <Link to="/">
            <img className="footer__logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer__bottom-left">
          <div className="footer__contact-info-container">
            <ExternalLink href="http://maps.google.com/?q=12345 Valley Ave 1, Seattle, WA">
              <p className="footer__contact-info-text">12345 Valley Ave 1, Seattle, WA</p>
            </ExternalLink>
            <a className="footer__contact-info-text" href="tel:(800) 123-45-67">
              <p>(800) 123-45-67</p>
            </a>
            <a className="footer__contact-info-text" href="tel:(800) 123-45-68">
              <p>(800) 123-45-68</p>
            </a>
          </div>
          <ExternalLink className="footer__link" href="mailto:mail@mail.com">
            <span>mail@mail.com</span>
          </ExternalLink>
        </div>
        <h3 className="footer__header footer__top-middle">Follow us</h3>
        <div className="footer__bottom-middle">
          <p className="footer__lets-get-connected">Let`U+2019`s get connected!</p>
          <div>
            <ExternalLink className="footer__social-img-link" href="https://facebook.com/">
              <img src={facebook} alt="facebook" />
            </ExternalLink>
            <ExternalLink className="footer__social-img-link" href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </ExternalLink>
            <ExternalLink className="footer__social-img-link" href="https://instagram.com/">
              <img src={instagram} alt="instagram" />
            </ExternalLink>
          </div>
        </div>
        <h3 className="footer__top-right">Sign up for our newsletter</h3>
        <div className="footer__bottom-right">
          <p className="footer__get-ten-percent-off">Get $10 off your next purchase.</p>
          <div className="footer__subscribe-input-container">
            <input className="footer__subscribe-input" placeholder="Your email" type="email" />
            <div className="footer__subscribe-button pointer">
              <span>Subscribe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__footer-legal-container">
        <div className="footer__footer-legal-inner-container">
          <div className="footer-legal-container__links-container">
            <Link className="footer-legal-container__link-item" to="/privacy-policy">
              <p className="footer-legal-container__link-item-text footer-legal-container__link-item-policy">
                Policy statement
              </p>
            </Link>
            <Link className="footer-legal-container__link-item" to="/cookies-usage">
              <p className="footer-legal-container__link-item-text">Cookie usage</p>
            </Link>
          </div>
          <div className="footer-legal-container__copyright-container">
            <p className="footer-legal-container__copyright-text">© 2021 Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
