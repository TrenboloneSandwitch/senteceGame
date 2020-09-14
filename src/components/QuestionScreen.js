import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import {
  changeCurrentOption,
  isFinished,
} from "../store/actionCreators/currentOption";
import NextLand from "./NextLand";
import { isEmpty } from "../validation";
import { navigate } from "@reach/router";

const QuestionScreen = ({ options, setCurrentOption, setDone }) => {
  const [error, setError] = useState(null);
  const [inputVal, setInputVal] = useState("");

  // Handling empty input
  useEffect(() => {
    if (isEmpty(inputVal)) {
      setError("Input must be filled...");
    } else {
      setError(null);
    }
  }, [inputVal, setInputVal]);

  useEffect(() => {
    if (options.currentOption._id != 0) {
      setRightBgCol();
      // Protect question state not to be empty (redundant protection)
      for (let i = 0; i < options.currentOption._id; i++) {
        if (options.items[i].answer == "") {
          setCurrentOption(options.items[0]);
          navigate("/");
        }
      }
    }
  }, [options.currentOption]);

  useEffect(() => {
    // if user enter the url'/question' directly redirect him to home page
    if (!document.querySelector("body").classList.contains("blue"))
      navigate("/");

    // set current
  }, []);

  useEffect(() => {
    options.currentOption.answer = inputVal;
  }, [inputVal]);

  const setRightBgCol = () => {
    // change bg handling
    if (options.currentOption._id <= options.items.length - 1) {
      document
        .querySelector("body")
        .classList.remove(options.items[options.currentOption._id - 1].color);

      document.querySelector("body").classList.add(options.currentOption.color);
    }
  };

  const nextQuestion = () => {
    if (isEmpty(options.currentOption.answer)) return;

    setError(null);
    setCurrentOption({
      ...options.items[options.currentOption._id + 1],
    });
    setInputVal("");
    if (options.items.length <= options.currentOption._id + 1) {
      setDone();
      document.querySelector("body").classList.remove("blue");
      navigate("/");
    }
  };

  return (
    <div style={styles.main}>
      <div
        style={{
          width: "50%",
          position: "absolute",
          top: "50%",
          transition: "transform 500ms ease-in-out",
          transform: options.currentOption.isInRight
            ? "translate(0%, -50%)"
            : "translate(100%, -50%)",
        }}
      >
        <h1>{options.currentOption.question}</h1>
        <input
          style={styles.input}
          maxLength={20}
          type="text"
          id={`input`}
          value={inputVal}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              nextQuestion();
            }
          }}
          onChange={({ currentTarget }) => setInputVal(currentTarget.value)}
        ></input>
        <span>{error}</span>
      </div>
      <NextLand
        style={{
          width: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transition: "transform 500ms ease-in-out",

          transform: options.currentOption.isInRight
            ? "translate(0%, -50%)"
            : "translate(-50vw, -50%)",
        }}
        onClick={nextQuestion}
      />
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
  main: {
    position: "relative",
    height: "100vh",
    margin: "0 100px",
  },

  input: {
    width: "100%",
    fontSize: "3em",
    backgroundColor: "rgba(0,0,0,.1)",
    border: 0,
    borderRadius: "15px",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
