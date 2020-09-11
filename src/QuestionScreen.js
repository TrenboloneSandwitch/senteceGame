import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import changeCurrentOption from "./store/actionCreators/currentOption";

const QuestionScreen = ({ currentOption, setCurrentOption }) => {
  return (
    <div className="search-params">
      <p>{currentOption._id}</p>
      <button onClick={() => setCurrentOption({ question: "why" })}>tu</button>
    </div>
  );
};

const mapStateToProps = ({ currentOption }) => ({
  currentOption,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentOption(currentOption) {
    dispatch(changeCurrentOption(currentOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
