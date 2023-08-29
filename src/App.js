import logo from "./logo.svg";
import ImageSlider from "./Component/ImageSlider";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import FunnyVideos from "./Component/FunnyVideos";
import CookingVideos from "./Component/CookingVideos";
import LifeStyleVideos from "./Component/LifeStyleVideos";
import Authentication from "./Component/Authentication";
import CreateListing from "./Component/CreateListing";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes,Route} from "react-router";

import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";

function App() {
  return (
   
  
    <div className="main-container">
    <Router>
      <Header></Header>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/funny" element={<FunnyVideos/>}/>
      <Route path="/cooking" element={<CookingVideos/>}/>
      <Route path="/lifestyle" element={<LifeStyleVideos/>}/>
      <Route path="/admin" element={<Authentication/>}/>
      </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}


export default App;
