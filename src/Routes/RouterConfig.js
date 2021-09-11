import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Public/Home";
const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
};
export default RouterConfig;
