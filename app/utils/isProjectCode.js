import { TrumotState } from "../../content/state.maneger.js";

export function isProjectCode(trumaId, projectCode) {
  const row = TrumotState.find(row => row.id === trumaId)
  return row && projectCode ? row.projectCode === projectCode : false
}