import './app.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Work from '../Work/Work';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Home />} />
        </Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}

export default App;
