import './cards.css';

function Cards() {
  const renderCard = () =>
    new Array(9).fill('').map(() => (
      <div className="card card_type_list">
        <img
          src="https://loremflickr.com/300/220/abstract?64952"
          alt="Our work"
          className="card__image"
        />
        {true && (
          <div className="card__text-wrapper">
            <p className="card__title">Branding</p>
            <p className="card__description">
              Ab nulla quo dolor sed adipisci. At eos voluptatem enim
              repellendus ab error eius accusantium. Adipisci recusandae
              commodi. Nobis provident placeat ut eos quos voluptatem qui
              quaerat. Necessitatibus quia ut. Dolores et pariatur reiciendis
              iusto.
            </p>
          </div>
        )}
      </div>
    ));
  return <div className="cards cards_type_list">{renderCard()}</div>;
}

export default Cards;
