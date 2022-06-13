import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Root from "../root";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Root} />
        <Route path={"/"}>
          <h1>This is tets</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
