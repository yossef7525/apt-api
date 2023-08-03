import { AptContent } from '../classes/AptContent.js';

export function getContent(req, res) {
  const aptContent = new AptContent(process.env.PATH_MDB);
  const { tableName } = req.body;
  const data = aptContent.getContentByTableName(tableName)
  data ? res.status(200).json(data) : res.status(400).json({ message: 'bad request' });
}

export function getById(req, res) {
  const aptContent = new AptContent(process.env.PATH_MDB);
  const { tableName, id } = req.body;
  const data = aptContent.getById(tableName, id)
  data ? res.status(200).json(data) : res.status(400).json({ message: 'bad request' });
}

export function getQuery(req, res) {
  const aptContent = new AptContent(process.env.PATH_MDB);
  const { tableName, query, field } = req.body;
  const data = aptContent.search(tableName, query, field)
  data ? res.status(200).json(data) : res.status(400).json({ message: 'bad request' });
}

export function getRange(req, res) {
  const aptContent = new AptContent(process.env.PATH_MDB);
  const { tableName, rangeStart, rangeEnd, field } = req.body;
  const data = aptContent.range(tableName, rangeStart, rangeEnd, field)
  data ? res.status(200).json(data) : res.status(400).json({ message: 'bad request' });
}

export function getFilter(req, res) {
  const aptContent = new AptContent(process.env.PATH_MDB);
  const { tableName, query } = req.body;
  const data = aptContent.filterContent(tableName, query)
  data ? res.status(200).json(data) : res.status(400).json({ message: 'bad request' });
}
