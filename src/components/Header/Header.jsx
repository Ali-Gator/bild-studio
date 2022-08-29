import logo from '../../assets/images/logo.png';
import logo2x from '../../assets/images/logo@2x.png';
import logo3x from '../../assets/images/logo@3x.png';
import Menu from '../Menu/Menu';
import './header.css';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        srcSet={`${logo2x} 2x,
             ${logo3x} 3x`}
        alt="Logo with D letter"
        className="header__logo"
      />
      <ul className="header__social-list list">
        <li className="header__social-item">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_twitter" />
          </a>
        </li>
        <li className="header__social-item">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_facebook" />
          </a>
        </li>
        <li className="header__social-item">
          <a
            href="https://rss.com"
            target="_blank"
            rel="noreferrer"
            aria-label="rss"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_rss" />
          </a>
        </li>
        <li className="header__social-item">
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            aria-label="pinterest"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_pinterest" />
          </a>
        </li>
        <li className="header__social-item">
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            aria-label="google plus"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_google-plus" />
          </a>
        </li>
        <li className="header__social-item">
          <a
            href="https://dribble.com"
            target="_blank"
            rel="noreferrer"
            aria-label="dribble"
            className="header__social-link link"
          >
            <div className="header__social-icon header__social-icon_type_dribble" />
          </a>
        </li>
      </ul>
      <Menu cssClass="header__menu" />
    </header>
  );
}

export default Header;
