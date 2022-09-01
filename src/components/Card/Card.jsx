import './card.css';
import { NavLink } from 'react-router-dom';

function Card({ card, isGrid }) {
  return (
    <div className={`card ${!isGrid && 'card_type_list'}`}>
      <NavLink to="/work" className="slider__image-link link">
        <img src={card.image} alt="Our work" className="card__image" />
      </NavLink>
      {!isGrid && (
        <div className="card__text-wrapper">
          <p className="card__title">{card.title}</p>
          <p className="card__description">{card.description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
