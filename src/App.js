import './App.css';
import Navbar from './Pages/Home/Header/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import { Route, Routes } from "react-router-dom";

import ReviewCheckin from './Pages/Home/Header/Products/ReviewCheckin';
import GoalManagement from './Pages/Home/Header/Products/GoalManagement';
import ContinuousFeedback from './Pages/Home/Header/Products/ContinuousFeedback';
import OtherFeatures from './Pages/Home/Header/Products/OtherFeatures';
import Pricing from './Pages/Home/Header/Pricing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Shared/Login';
import SignUp from './Pages/Shared/SignUp';
import Resources from './Pages/Resources/Resources';
import Overview from './Pages/Home/Header/Products/Overview';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AddCustomerReview from './Pages/AddCustomerReview/AddCustomerReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/reviewCheckin" element={<ReviewCheckin />} />
        <Route path="/goalManagement" element={<GoalManagement />} />
        <Route path="/continuousFeedback" element={<ContinuousFeedback />} />
        <Route path="/otherFeatures" element={<OtherFeatures />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/addCustomerReview' element={<AddCustomerReview />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        
        
      </Routes>
      
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
