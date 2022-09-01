import Title from '../Title/Title';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

function Work() {
  return (
    <>
      <Title>Check Out What I can Do</Title>
      <section className="work">
        <Filters />
        <Cards />
      </section>
    </>
  );
}

export default Work;
