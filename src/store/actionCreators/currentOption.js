import { CHANGE_CURRENT_OPTION, RESET, IS_FINISHED } from "../actionVariables";

export function changeCurrentOption(option) {
  return { type: CHANGE_CURRENT_OPTION, payload: option };
}

export function isFinished(option) {
  return { type: IS_FINISHED, payload: option };
}
export function reset(option) {
  return { type: RESET, payload: option };
}
