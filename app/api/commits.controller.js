import { Tables } from "../types/enums.js";
import { AptContent } from "../classes/AptContent.js";


export function getCommits(req, res){
    const aptContent = new AptContent(process.env.PATH_MDB);
    const {toremId} = req.body;
    const commits = aptContent.search(Tables.Commits, toremId, 'toremId')

    commits.forEach(commit => {
        const matches = aptContent.search(Tables.Matches, commit.id, 'commitId')
        const data = matches.map(m => m.sum);
        const sum = data.reduce((a,b)=> a+b,0);
        commit.paymented = sum;
        commit.itra = commit.sum - sum
    })
    commits ? res.status(200).json(commits) : res.status(400).json({ message: 'bad request' });
}