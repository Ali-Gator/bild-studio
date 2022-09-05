import './footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          Copyright 2013 Display. All Rights Reserved.
        </p>
        <ul className="footer__link-list list">
          <li className="footer__link-item">
            <NavLink to="/" className="footer__link link">
              Home
            </NavLink>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="footer__link-item">
            <NavLink to="/about" className="footer__link link">
              About
            </NavLink>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="footer__link-item">
            <NavLink to="/work" className="footer__link link">
              Work
            </NavLink>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="footer__link-item">
            <NavLink to="/contact" className="footer__link link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
