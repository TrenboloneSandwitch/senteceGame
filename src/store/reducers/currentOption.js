import { CHANGE_CURRENT_OPTION } from "../actionVariables";

const myState = {
  options: [
    { question: "Why", answer: "", _id: 0 },
    { question: "What", answer: "", _id: 1 },
  ],
  currentOption: {},
};

export default function currentOption(state = myState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_OPTION:
      const newState = { ...state, currentOption: this.options[0] };
      return newState;
    default:
      return state;
  }
}
