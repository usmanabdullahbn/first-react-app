import React from "react";
import Home from "./components/home/home";
import { About, Contact } from "./components/about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import TodoList from "./components/todo list/todo-list";
import WeatherApp from "./components/weather App/weather";
import ImageSlider from "./components/image slider/img-slider";
import Faq from "./components/FAQ/Faq";
import AskUs from "./components/ask us/aks";
import Snapshort from "./components/Snapshort/Snapshort";





const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="contact" element={<Contact />} />
          <Route  path="todo-list" element={<TodoList />} />
          <Route  path="weather-app" element={<WeatherApp />} />
          <Route  path="image-slider" element={<ImageSlider />} />
          <Route  path="faq" element={<Faq />} />
          <Route  path="ask-us" element={<AskUs />} />
          <Route  path="snapshort" element={<Snapshort />} />
        </Routes>
      </Router>
    </>
    /*<Fragment>
      <Home />
      <About/>
    </Fragment>*
    /*<React.Fragment>
      <Home />
      <About/>
    </React.Fragment> */
    /* <div>
        <Home />
        <About/>
    </div> */
  );
}

export default App;
