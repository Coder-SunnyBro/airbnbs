import './App.css';
import Header from './Components/Header';
import HostProfile from './Components/HostProfile';
import Maps from './Components/Maps';
import Navbar from "./Components/Navbar";
import Review from './Components/Review';
import Photos from "./Components/Photos";
import Footer from './Components/Footer';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Photos/>
      <Navbar/>
      <HostProfile/>
      <Review/>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
