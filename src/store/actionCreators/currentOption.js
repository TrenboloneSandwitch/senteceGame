import { CHANGE_CURRENT_OPTION, IS_FINISHED } from "../actionVariables";

export function changeCurrentOption(option) {
  return { type: CHANGE_CURRENT_OPTION, payload: option };
}

export function isFinished(option) {
  return { type: IS_FINISHED, payload: option };
}
