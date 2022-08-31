import './ourProjects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { imageSlides, textSlides } from '../../utils/constants';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slider__next-arrow`}
      onClick={onClick}
      aria-label="next slide"
      type="button"
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slider__prev-arrow`}
      onClick={onClick}
      aria-label="next slide"
      type="button"
    />
  );
}

function OurProjects() {
  const [firstSliderRef, setFirstSliderRef] = useState();
  const [secondSliderRef, setSecondSliderRef] = useState();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  const setFirstRef = useCallback((node) => {
    if (node !== null) {
      setFirstSliderRef(node);
    }
  }, []);

  const setSecondRef = useCallback((node) => {
    if (node !== null) {
      setSecondSliderRef(node);
    }
  });

  const renderImages = () =>
    imageSlides.map((image, index) => (
      <NavLink to="/work" className="slider__image-link" key={image}>
        <img
          src={image}
          alt={`Project ${index + 1}`}
          className="slider__image"
        />
      </NavLink>
    ));

  const renderTexts = () =>
    new Array(5).fill(textSlides).map((text) => (
      <div className="slider__text" key={text.title}>
        <p className="slider__title">{text.title}</p>
        <p className="slider__description">{text.description}</p>
      </div>
    ));

  return (
    <section className=" projects">
      <h2 className="projects__title">A Couple of Our Featured Projects</h2>
      <p className="projects__caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
        ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
      </p>
      <div className="projects__slider slider">
        <Slider
          className="slider__image-wrapper"
          asNavFor={secondSliderRef}
          ref={setFirstRef}
          swipeToSlide
          focusOnSelect
          pauseOnFocus
          pauseOnHover
          centerMode={width > 1380}
          centerPadding="220px"
          slidesToShow={width > 950 ? 3 : 1}
          // autoplay
          draggable
          infinite
          mobileFirst
          initialSlide={2}
          arrows={false}
        >
          {renderImages()}
        </Slider>
        <Slider
          className="slider__text-wrapper"
          asNavFor={firstSliderRef}
          ref={setSecondRef}
          mobileFirst
          initialSlide={2}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {renderTexts()}
        </Slider>
      </div>
    </section>
  );
}

export default OurProjects;

// 768 -> 220
// 210px 1400
