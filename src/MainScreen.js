import React from "react";
import { connect } from "react-redux";
import { changeCurrentOption } from "./store/actionCreators/currentOption";
import { navigate } from "@reach/router";

function MainScreen({ options, setCurrentOption }) {
  const startGame = () => {
    setCurrentOption(options.items[0]);
    navigate("/question");
  };
  return (
    <div>
      <h1>Main Screen</h1>
      <button onClick={startGame}>Start</button>
      {options.isFinished && (
        <p>{`${options.items[0].answer} ${options.items[1].answer} ${options.items[2].answer}`}</p>
      )}
    </div>
  );
}

const mapStateToProps = ({ options }) => ({
  options,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentOption(option) {
    dispatch(changeCurrentOption(option));
  },
});

const styles = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
