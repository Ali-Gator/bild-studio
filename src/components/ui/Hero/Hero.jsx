import { NavLink } from 'react-router-dom';
import banner2x from '../../../assets/images/slider-overimage@2x.png';
import banner3x from '../../../assets/images/slider-overimage@3x.png';
import banner from '../../../assets/images/slider-overimage.png';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img
          src={banner}
          srcSet={`${banner2x} 2x,
             ${banner3x} 3x`}
          alt="Laptop, tablet and phone together"
          className="hero__image"
        />
      </div>
      <p className="hero__caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.
      </p>
      <NavLink to="/work" className="hero__link link">
        Browse Portfolio
      </NavLink>
    </section>
  );
}

export default Hero;
