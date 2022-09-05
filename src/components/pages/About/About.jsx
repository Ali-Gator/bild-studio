import { Helmet } from 'react-helmet-async';
import Title from '../../ui/Title/Title';
import AboutInfo from '../../ui/AboutInfo/AboutInfo';
import Services from '../../ui/Services/Services';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About our company" />
      </Helmet>
      <Title>About My Business</Title>
      <AboutInfo />
      <Services />
    </>
  );
}

export default About;
