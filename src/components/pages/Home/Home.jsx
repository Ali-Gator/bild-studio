import Hero from '../../ui/Hero/Hero';
import Video from '../../ui/Video/Video';
import OurProjects from '../../ui/OurProjects/OurProjects';

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
