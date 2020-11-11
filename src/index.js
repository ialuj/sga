import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes />
    <Footer />
  </Router>,
  document.getElementById("root")
);
