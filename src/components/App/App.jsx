import './app.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="work" element={<Home />} />
          <Route path="contact" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
