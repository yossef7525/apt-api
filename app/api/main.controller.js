import { AptContent } from '../classes/AptContent.js';


const aptContent = new AptContent(process.env.PATH_MDB);

  export function getContent (req, res) {
        const {tableName} = req.body;
        const data = aptContent.getContentByTableName(tableName)
        data ? res.status(200).json(data) : res.status(400).json({message: 'bad request'});
    }
  export function getById (req, res) {
        const {tableName, id} = req.body;
        const data = aptContent.getById(tableName, id)
        data ? res.status(200).json(data) : res.status(400).json({message: 'bad request'});
    }
  export function getQeury (req, res) {
        const {tableName, query, field} = req.body;
        const data = aptContent.search(tableName, query, field)
        data ? res.status(200).json(data) : res.status(400).json({message: 'bad request'});
    }
  export function getRange (req, res) {
        const {tableName, rangeStart, rangeEnd, field} = req.body;
        const data = aptContent.range(tableName, rangeStart, rangeEnd, field)
        data ? res.status(200).json(data) : res.status(400).json({message: 'bad request'});
    }
