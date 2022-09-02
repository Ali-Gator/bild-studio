import './app.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
