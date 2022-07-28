
import './App.css';
import Navbar from './Pages/Home/Header/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
      
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
