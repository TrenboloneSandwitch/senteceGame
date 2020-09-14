import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import {
  changeCurrentOption,
  isFinished,
} from "./store/actionCreators/currentOption";
import NextLand from "./NextLand";
import { isEmpty } from "./validation";
import { navigate } from "@reach/router";

const QuestionScreen = ({ options, setCurrentOption, setDone }) => {
  const [error, setError] = useState(null);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (Object.keys(options.currentOption).length === 0)
      setCurrentOption(options.items[0]);
  }, []);

  useEffect(() => {
    options.currentOption.answer = inputVal;
  }, [inputVal]);

  const nextQuestion = () => {
    /*  if (isEmpty(options.currentOption.answer)) {
      setError("Input must be filled...");
      return;
    }
 */
    setError(null);
    setCurrentOption({
      ...options.items[options.currentOption._id + 1],
    });
    setInputVal("");
    if (options.items.length <= options.currentOption._id + 1) {
      setDone();
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: options.currentOption.isInRight ? "row" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        margin: "0 100px",
      }}
    >
      <div style={{ width: "50vw" }}>
        <h1>{options.currentOption.question}</h1>
        <input
          style={{
            width: "100%",
            fontSize: "3em",
            backgroundColor: "rgba(0,0,0,.1)",
            border: 0,
            borderRadius: "15px",
          }}
          maxLength={20}
          type="text"
          id={`input`}
          value={inputVal}
          onChange={({ currentTarget }) => setInputVal(currentTarget.value)}
        ></input>
        <button onClick={nextQuestion}>tu</button>
        <span>{error}</span>
      </div>
      <NextLand style={{}} />
    </div>
  );
};

const mapStateToProps = ({ options }) => ({
  options,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentOption(option) {
    dispatch(changeCurrentOption(option));
  },
  setDone() {
    dispatch(isFinished());
  },
});

const styles = {
  land: {
    position: "absolute",
    top: "50%",
    backgroundColor: "white",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
