import './App.css';
import { Routes, Route} from "react-router-dom";
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
