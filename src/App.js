import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Routes/HomePage';
import Details from './Routes/DetailsPage';
import Stocks from './components/Stocks';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Stocks />} />
    <Route path="detail" element={<Details />} />
  </Routes>
  );
}

export default App;
