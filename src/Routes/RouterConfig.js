import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"

const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
};
export default RouterConfig;
