import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Routes/RouterConfig";
import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
