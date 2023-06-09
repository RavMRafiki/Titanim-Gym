import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./About";
import Classes from "./Classes";
import Gallery from "./Gallery";
import BmiCalculator from "./BmiCalculator";
import { ReactElement, useState } from "react";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import logo from "./Images/logo.png";

function App(): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="Titanum Gym logo" height="10" />
          </Link>
          <button onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars" aria-hidden="true"></i>
            )}
          </button>
        </div>
        <ul className={navbarOpen ? "" : "navbar-closed"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/classes">Classes</Link>
          </li> */}
          <li>
            <Link to="/bmi">BMI</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/bmi" element={<BmiCalculator />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
