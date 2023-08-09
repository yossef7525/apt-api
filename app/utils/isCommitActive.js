import { CommitsState } from "../../content/state.maneger.js"

export function isCommitActive(commitId){
    const row = CommitsState.find(r => r.id === commitId)
    return row ? true : false
}