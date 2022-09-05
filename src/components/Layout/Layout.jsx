import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
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
