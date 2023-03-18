import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import DetailComponent from './components/Details';
import Stocks from './components/Stocks';
import Show from './components/Show';
import Layout from './components/Layout'
import About from './components/About';


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Stocks />} />
      <Route path="stocks" element={<Stocks />} />
      <Route path="stock" element={<DetailComponent />}>
        <Route path=":slug" element={<Show />} />
      </Route>
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
  );
}

export default App;
