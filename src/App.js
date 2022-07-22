import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Header/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
