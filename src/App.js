import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import classes from "./App.css";

const app = (props) => (
  <div className="container-fluid">
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </div>
)

export default app;
