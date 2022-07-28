
import './App.css';
import Navbar from './Pages/Home/Header/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Overview from './Pages/Products/Overview';
import ReviewCheckin from './Pages/Products/ReviewCheckin';
import GoalManagement from './Pages/Products/GoalManagement';
import ContinuousFeedback from './Pages/Products/ContinuousFeedback';
import OtherFeatures from './Pages/Products/OtherFeatures';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/reviewCheckin" element={<ReviewCheckin />} />
          <Route path="/goalManagement" element={<GoalManagement />} />
          <Route path="/continuousFeedback" element={<ContinuousFeedback />} />          
          <Route path="/otherFeatures" element={<OtherFeatures />} />          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
