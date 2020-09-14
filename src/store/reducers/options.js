import { CHANGE_CURRENT_OPTION, IS_FINISHED, RESET } from "../actionVariables";
import { myState } from "./initialState";

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
    case RESET: {
      return { ...state, items: myState.items };
    }

    default:
      return state;
  }
}
