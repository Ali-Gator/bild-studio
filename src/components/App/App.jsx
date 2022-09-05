import './app.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../Layout/Layout';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
