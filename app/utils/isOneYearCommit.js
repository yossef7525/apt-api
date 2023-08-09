import { CommitsState, MatchesState } from "../../content/state.maneger.js";

export function isOneYearCommit(trumaId, toremId){
    const commitId = MatchesState.find(row => row.trumaId === trumaId).commitId;
    const commits = CommitsState.filter(row => row.toremId === toremId);
    const commitYear = new Date(commits.find(row => row.id === commitId)?.dateStart).getFullYear()
    const years = commits.map(row => new Date(row?.dateStart).getFullYear()).sort((a, b) => a - b)
    
    return commitYear && years.length ? years[0] === commitYear : false;
}