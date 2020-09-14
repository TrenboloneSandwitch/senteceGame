import { CHANGE_CURRENT_OPTION, IS_FINISHED } from "../actionVariables";

const myState = {
  items: [
    { question: "Why", answer: "", _id: 0, isInRight: true },
    { question: "What", answer: "", _id: 1, isInRight: false },
    { question: "Where", answer: "", _id: 2, isInRight: true },
  ],
  currentOption: {},
  isFinished: false,
};

export default function options(state = myState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_OPTION:
      let { items, currentOption } = state;

      const updatedItems = items.map((el) =>
        el._id === currentOption._id ? currentOption : el
      );

      const newState = {
        ...state,
        items: updatedItems,
        currentOption: action.payload,
      };
      console.log(newState);
      return newState;

    case IS_FINISHED: {
      return { ...state, isFinished: true };
    }

    default:
      return state;
  }
}
