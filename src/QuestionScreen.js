import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import changeCurrentOption from "./store/actionCreators/currentOption";
import NextLand from "./NextLand";

const QuestionScreen = ({ options, setCurrentOption }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: options.currentOption.isInRight ? "row" : "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <p>{options.currentOption.question}</p>
        <input type="text" id={`input--${options.currentOption._id}`}></input>
        <button
          onClick={() =>
            setCurrentOption({
              ...options.items[
                Object.keys(options.currentOption).length == 0
                  ? 0
                  : options.currentOption._id + 1
              ],
            })
          }
        >
          tu
        </button>
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
});

const styles = {
  land: {
    position: "absolute",
    top: "50%",
    backgroundColor: "white",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
