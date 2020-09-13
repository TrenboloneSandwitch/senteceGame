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
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        margin: "0 100px",
        transition: "all 1000ms ease-in",
      }}
    >
      <div style={{ width: "50vw" }}>
        <p>{options.currentOption.question}</p>
        <input
          style={{ width: "100%" }}
          type="text"
          id={`input--${options.currentOption._id}`}
        ></input>
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
