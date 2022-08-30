import { NavLink } from 'react-router-dom';
import './banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <p className="banner__text">Are You Ready To Be Blown Away?</p>
        <NavLink to="/contact" className="banner__link link">
          Click Here to Find Out
        </NavLink>
      </div>
    </section>
  );
}

export default Banner;
