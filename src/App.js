import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/HomePage';
import Details from './Routes/DetailsPage';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="detail" element={<Details />} />
  </Routes>
  );
}

export default App;
