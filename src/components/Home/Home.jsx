import Hero from '../Hero/Hero';
import Video from '../Video/Video';
import OurProjects from '../OurProjects/OurProjects';

function Home() {
  return (
    <>
      <h1 className="visually-hidden">Display is a great company</h1>
      <Hero />
      <Video />
      <OurProjects />
    </>
  );
}

export default Home;
