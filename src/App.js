import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Routes/HomePage';
import DetailComponent from './components/Details';
import Stocks from './components/Stocks';
import Show from './components/Show';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Stocks />} />
    <Route path="stock" element={<DetailComponent />} >
      <Route path=":slug" element={<Show />} />
    </Route>
  </Routes>
  );
}

export default App;
