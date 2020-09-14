import React from "react";
import { connect } from "react-redux";
import { changeCurrentOption } from "../store/actionCreators/currentOption";
import { navigate } from "@reach/router";
import Cloud from "./Cloud";

function MainScreen({ options, setCurrentOption }) {
  const startGame = () => {
    setCurrentOption(options.items[0]);
    document.querySelector("body").classList.add("blue");
    navigate("/question");
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!options.isFinished && (
        <Cloud style={styles.cloudOne} onClick={startGame} result={"START"} />
      )}

      {options.isFinished && (
        <Cloud
          style={styles.cloudTwo}
          result={`${options.items[0].answer} ${options.items[1].answer} ${options.items[3].answer} ${options.items[2].answer}.`}
          desc="Start new game"
          onClick={startGame}
        />
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

const styles = {
  cloudOne: {
    width: 1150 / 3 + "px",
    height: 575 / 3 + "px",
    position: "absolute",
    right: "15%",
    bottom: "10%",
    fontSize: "1.5em",
  },
  cloudTwo: {
    width: 1150 / 2 + "px",
    height: 575 / 2 + "px",
    position: "absolute",
    right: "5%",
    bottom: "5%",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
