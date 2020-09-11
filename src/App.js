import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store/store";
import QuestionScreen from "./QuestionScreen";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <QuestionScreen />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
