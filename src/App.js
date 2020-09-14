import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store/store";
import QuestionScreen from "./QuestionScreen";
import MainScreen from "./MainScreen";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainScreen path="/" />
        <QuestionScreen path="/question" />
      </Router>
      <div></div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
