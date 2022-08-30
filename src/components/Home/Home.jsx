import Hero from '../Hero/Hero';
import './home.css';
import Video from '../Video/Video';
import OurProjects from '../OurProjects/OurProjects';

function Home() {
  return (
    <main className="home">
      <h1 className="visually-hidden">Display is a great company</h1>
      <Hero />
      <Video />
      <OurProjects />
    </main>
  );
}

export default Home;
