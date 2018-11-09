import React from "react";
import loadersrc from "../../assets/loading.gif";

const Loader = props => (
  <div>
    <img style={{ width: 75 }} alt="Loader Icon" src={loadersrc} />
  </div>
);

export default Loader;
