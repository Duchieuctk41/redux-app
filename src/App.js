import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import classes from "./App.css";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";

const app = (props) => (
  <div className={classes.App}>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default app;
