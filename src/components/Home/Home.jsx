import Hero from '../Hero/Hero';
import './home.css';
import Video from '../Video/Video';

function Home() {
  return (
    <main className="home">
      <h1 className="visually-hidden">Display is a great company</h1>
      <Hero />
      <Video />
    </main>
  );
}

export default Home;
