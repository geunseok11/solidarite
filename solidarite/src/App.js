import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home";
import configureStore from "./store/configureStore";

const App = () => {
  return (
    <Router>
      <Provider store={configureStore}>
        <Route exact path="/" component={Home} />
      </Provider>
    </Router>
  );
};

export default App;
