import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
      <Helmet titleTemplate="%s | DISPLAY" />
      <Header />
      <main>
        <Outlet />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
