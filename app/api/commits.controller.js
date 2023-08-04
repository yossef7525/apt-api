import { Tables } from "../types/enums.js";
import { AptContent } from "../classes/AptContent.js";

///===========================================================
/// this function return commits list for torem from all years
///===========================================================
export function getCommits(req, res){
    const aptContent = new AptContent(process.env.PATH_MDB);
    const {toremId} = req.body;
    const commits = aptContent.search(Tables.Commits, toremId, 'toremId')
    const matches = aptContent.getContentByTableName(Tables.Matches)
    commits.forEach(commit => {
        const rows = matches.filter(r => r.commitId === commit.id)
        const data = rows.map(m => m.Sum);
        const sum = data.reduce((a,b)=> a+b,0);
        commit.paymented = sum;
        commit.itra = commit.sum - sum
    })
    commits ? res.status(200).json(commits) : res.status(400).json({ message: 'bad request' });
}