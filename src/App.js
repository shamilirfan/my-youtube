import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Youtube1st from './Youtube1st';
import Youtube2nd from './Youtube2nd';
import Header from './Header';

function App () {
  return(
    <div className="App h-full w-full ">
        <Header/>

        <Routes>
        <Route path="1st" element={<Youtube1st />} />
        <Route path="/:image" element={<Youtube2nd />} />
      </Routes>
           
    </div>
  );
}

export default App;
