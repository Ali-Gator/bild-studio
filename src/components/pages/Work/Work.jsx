import { useEffect, useState } from 'react';
import { useInView } from 'react-cool-inview';
import { Helmet } from 'react-helmet';
import Title from '../../ui/Title/Title';
import Filters from '../../ui/Filters/Filters';
import './work.css';
import Card from '../../ui/Card/Card';
import getProjectCards from '../../../utils/api';
import { messages, textCategories } from '../../../utils/constants';

function Work() {
  const [cards, setCards] = useState(null);
  const [isGrid, setIsGrid] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(textCategories[0]);
  const [message, setMessage] = useState('');

  const { observe } = useInView({
    rootMargin: '50px 0px',
    onEnter: async () => {
      try {
        const newCards = await getProjectCards({
          limit: 9,
          page,
          category,
        });
        if (newCards.length === 0) {
          setMessage(messages.NO_MORE_RESULT);
        } else {
          setCards([...cards, ...newCards]);
          setPage((prev) => prev + 1);
        }
      } catch (e) {
        setMessage(e.message ?? messages.SERVER_ERR);
      }
    },
  });

  const renderCards = () =>
    cards?.map((card, index) => (
      <Card
        card={card}
        ref={index === cards.length - 1 ? observe : null}
        key={card.id}
        isGrid={isGrid}
      />
    ));

  useEffect(() => {
    (async () => {
      try {
        setMessage('');
        setCards(null);
        const initCards = await getProjectCards({
          limit: 9,
          page: 1,
          category,
        });
        if (initCards.length === 0) {
          setMessage(messages.NO_RESULTS);
        } else {
          setCards(initCards);
          setPage(2);
        }
      } catch (e) {
        setMessage(e.message ?? messages.SERVER_ERR);
      }
    })();
  }, [category]);

  return (
    <>
      <Helmet>
        <title>Work</title>
        <meta name="description" content="Our projects" />
      </Helmet>
      <Title>Check Out What I can Do</Title>
      <section className="work">
        <Filters
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          setCategory={setCategory}
          category={category}
          setPage={setPage}
          setCards={setCards}
          setMessage={setMessage}
        />
        <div
          className={`cards ${isGrid ? 'cards_type_grid' : 'cards_type_list'}`}
        >
          {renderCards()}
        </div>
        {message && <p className="work__message">{message}</p>}
      </section>
    </>
  );
}

export default Work;
