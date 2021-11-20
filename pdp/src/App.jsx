import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";

import "./index.scss";

const Header = React.lazy(() => import("home/Header"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading</div>}>
      <Header/>
    </Suspense>
    <div>
      PDP page content goes here
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
