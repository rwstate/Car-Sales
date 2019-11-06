import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeItem={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures addItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default connect(
  null,
  { addFeature, removeFeature }
)(App);
