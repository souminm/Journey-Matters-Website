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
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import { useState } from "react";
import EntertainmentImg from "./Images/Entertainment_img.jpg";
import HomeImg from "./Images/Background-img.jpg";
import cookingImg from "./Images/Cooking_img.jpg";
import lifeStyleImg from "./Images/Lifestyle_img.jpg";
import ViewListing from "./Component/ViewListing";
import UpdateListing from "./Component/UpdateListing";
import FormContextProvider from "./Services/FormContext";
function App() {
  const [backgroundImage, setBackgroundImage] = useState(HomeImg);
  function changeImg(img) {
    setBackgroundImage(img);
  }
  return (
    <FormContextProvider>
      {" "}
      <div
        className="main-container "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Router>
          <Header></Header>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  onChange={() => {
                    changeImg(HomeImg);
                  }}
                />
              }
            />
            <Route
              path="/funny"
              element={
                <FunnyVideos
                  onChange={() => {
                    changeImg(EntertainmentImg);
                  }}
                />
              }
            />
            <Route
              path="/cooking"
              element={
                <CookingVideos
                  onChange={() => {
                    changeImg(cookingImg);
                  }}
                />
              }
            />
            <Route
              path="/lifestyle"
              element={
                <LifeStyleVideos
                  onChange={() => {
                    changeImg(lifeStyleImg);
                  }}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Authentication
                  onChange={() => {
                    changeImg(HomeImg);
                  }}
                />
              }
            />
            <Route
              path="/view-listing"
              element={
                <ViewListing
                  onChange={() => {
                    changeImg(lifeStyleImg);
                  }}
                />
              }
            />
            <Route
              path="/create-listing"
              element={
                <CreateListing
                  onChange={() => {
                    changeImg(lifeStyleImg);
                  }}
                />
              }
            />
            <Route
              path="/update-listing/:id"
              element={
                <UpdateListing
                  onChange={() => {
                    changeImg(lifeStyleImg);
                  }}
                />
              }
            />
          </Routes>
          <div className="footer">
            <Footer></Footer>
          </div>
        </Router>
      </div>
    </FormContextProvider>
  );
}

export default App;
