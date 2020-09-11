import { CHANGE_CURRENT_OPTION } from "../actionVariables";

export default function changeCurrentOption(option) {
  return { type: CHANGE_CURRENT_OPTION, payload: option };
}
