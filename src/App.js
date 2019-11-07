import React from "react";
import {Route, Link} from "react-router-dom";

import CarPage from "./components/CarPage";



import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <Route exact path="/" render={props => (
      <div>
        <Link to="/car1">Car1</Link>
        <Link to="/car2">Car2</Link>
      </div>
      )}/>
      <Route path="/:carId" component={CarPage} />
    </>
  )
}

export default App;