import { Routes, Route, Link } from "react-router-dom";
import Advertise from './Advertise';
import './App.css';
import Header from './Header';
import Header2 from './Header2';
import Navber from './Navber';
import News3 from './News3';
import Home from './Home';
import SecondPage from './SecondPage';
import ThardPage from './ThardPage';


function App() {
  return (
    <div className='w-full h-full'>
      <Header />
      <Header2 />
      <hr className='mt-2'></hr>
      <Navber />
      <hr className='mt-2'></hr>
      <Advertise />
      <hr className='mt-4'></hr>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2nd" element={<SecondPage />} />
        <Route path="/3rd" element={<ThardPage />} />
      </Routes>

    </div>
  );
}

export default App;
