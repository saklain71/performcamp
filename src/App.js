import './App.css';
import Navbar from './Pages/Home/Header/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import { Route, Routes } from "react-router-dom";

import ReviewCheckin from './Pages/Home/Header/Products/ReviewCheckin';
import GoalManagement from './Pages/Home/Header/Products/GoalManagement';
import ContinuousFeedback from './Pages/Home/Header/Products/ContinuousFeedback';

import Pricing from './Pages/Pricing/Pricing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Shared/Login';
import SignUp from './Pages/Shared/SignUp';
import Resources from './Pages/Resources/Resources';
import Overview from './Pages/Home/Header/Products/Overview';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AddCustomerReview from './Pages/AddCustomerReview/AddCustomerReview';
import ChatwootWidget from './Pages/Chatwoot/Chatwoot'
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Customers from './Pages/Customers/Customers';
//import RequireAuth from './Pages/Shared/RequireAuth';
import Dashbord from './Pages/Dashbord/Dashbord';
import LeaderBoard from './Pages/Dashbord/LeaderBoard';
import Goal from './Pages/Dashbord/Goal';
import Review from './Pages/Dashbord/Review';
import Feedback from './Pages/Dashbord/Feedback';
import Deadline from './Pages/Dashbord/Deadline';
import UserProfile from './Pages/Dashbord/UserProfile';

import MakePayment from './Pages/Pricing/MakePayment/MakePayment';
import ConfirmPayment from './Pages/Pricing/ConfirmPayment/ConfirmPayment';

import Tasks from './Pages/Dashbord/Task/Tasks';
import MakeAdmin from './Pages/Dashbord/MakeAdmin/MakeAdmin';
import AddTask from './Pages/Dashbord/Task/AddTask';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/reviewCheckin" element={<ReviewCheckin />} />
        <Route path="/goalManagement" element={<GoalManagement />} />
        <Route path="/continuousFeedback" element={<ContinuousFeedback />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/makePayment" element={<MakePayment />} />
        <Route path="/confirmPayment/:id" element={<ConfirmPayment />} />
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/addCustomerReview' element={<AddCustomerReview />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/customers' element={<Customers />}></Route>

        <Route path="/dashboard" element={<Dashbord></Dashbord>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path="leaderboard" element={<LeaderBoard></LeaderBoard>}></Route>
          <Route path="goal" element={<Goal></Goal>}></Route>
          <Route path="task" element={<Tasks/>}></Route>
          <Route path="addtask" element={<AddTask/>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin/>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="feedback" element={<Feedback></Feedback>}></Route>
          <Route path="deadline" element={<Deadline></Deadline>}></Route>
        </Route>

      </Routes>
      <ChatwootWidget />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
