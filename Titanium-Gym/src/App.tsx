import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./About";
import Classes from "./Classes";
import Gallery from "./Gallery";
import OurTeam from "./OurTeam";
import BmiCalculator from "./BmiCalculator";

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src="logo.svg" alt="Titanum Gym logo" height="10" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/bmi">BMI</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/team"></Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/team" element={<OurTeam />}></Route>
        <Route path="/bmi" element={<BmiCalculator />}></Route>
      </Routes>
    </>
  );
}

export default App;
