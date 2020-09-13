import { CHANGE_CURRENT_OPTION } from "../actionVariables";

const myState = {
  items: [
    { question: "Why", answer: "", _id: 0, isInRight: true },
    { question: "What", answer: "", _id: 1, isInRight: false },
    { question: "Where", answer: "", _id: 2, isInRight: true },
  ],
  currentOption: {},
};

export default function options(state = myState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_OPTION:
      console.log(state);
      const newState = { ...state, currentOption: action.payload };
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
