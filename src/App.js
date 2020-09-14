import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store/store";
import QuestionScreen from "./components/QuestionScreen";
import MainScreen from "./components/MainScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Router style={{ width: "100vw", height: "100vh" }}>
        <MainScreen path="/" />
        <QuestionScreen path="/question" />
      </Router>
      <Footer />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
