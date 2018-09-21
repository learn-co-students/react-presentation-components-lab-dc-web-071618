import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent
      handleClick={event => (event.target.style.backgroundColor = "teal")}
    />
  </div>,
  document.getElementById("root")
);
