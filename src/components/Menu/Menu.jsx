import { NavLink } from 'react-router-dom';
import './menu.css';

function Menu({ cssClass }) {
  return (
    <nav className={`menu ${cssClass}`}>
      <input className="menu__toggle" type="checkbox" id="menu__toggle" />
      <label className="menu__button" htmlFor="menu__toggle">
        <span />
      </label>
      <ul className="menu__list list">
        <li className="menu__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `menu__link link ${isActive && 'menu__link_active'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `menu__link link ${isActive && 'menu__link_active'}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `menu__link link ${isActive && 'menu__link_active'}`
            }
          >
            Work
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `menu__link link ${isActive && 'menu__link_active'}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
