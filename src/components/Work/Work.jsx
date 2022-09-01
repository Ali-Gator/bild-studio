import { useEffect, useState } from 'react';
import { useInView } from 'react-cool-inview';
import Title from '../Title/Title';
import Filters from '../Filters/Filters';
import './work.css';
import Card from '../Card/Card';
import getProjectCards from '../../utils/api';

function Work() {
  const [cards, setCards] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const [page, setPage] = useState(1);

  const renderCards = () =>
    cards.map((card) => <Card card={card} key={card.id} isGrid={isGrid} />);

  const { observe } = useInView({
    rootMargin: '50px 0px',
    onEnter: async () => {
      const newCards = await getProjectCards({ limit: 9, page });
      setCards([...cards, ...newCards]);
      setPage((prev) => prev + 1);
    },
  });

  useEffect(() => {
    (async () => {
      const initCards = await getProjectCards({ limit: 9, page });
      setCards(initCards);
    })();
  }, []);

  return (
    <>
      <Title>Check Out What I can Do</Title>
      <section className="work">
        <Filters isGrid={isGrid} setIsGrid={setIsGrid} />
        <div
          className={`cards ${isGrid ? 'cards_type_grid' : 'cards_type_list'}`}
        >
          {renderCards()}
        </div>
        <div ref={observe} />
      </section>
    </>
  );
}

export default Work;
