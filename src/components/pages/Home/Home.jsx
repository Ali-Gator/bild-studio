import { Helmet } from 'react-helmet';
import Hero from '../../ui/Hero/Hero';
import Video from '../../ui/Video/Video';
import OurProjects from '../../ui/OurProjects/OurProjects';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Web site about Display company" />
      </Helmet>
      <h1 className="visually-hidden">Display is a great company</h1>
      <Hero />
      <Video />
      <OurProjects />
    </>
  );
}

export default Home;
