import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import DisplayProductContent from "./DisplayProductContent";

import "./index.scss";

const App = () => (
 <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
      <div>
        <HomeContent/>
        <Switch> 
          <Route path="/product/id" component={DisplayProductContent}/>
        </Switch>
      </div>
    <Footer/>
  </div>
 </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
