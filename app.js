import express from 'express';
const app = express();
// const apiAdmin = require('./routes/admin/api')
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import path from 'path';
import cors from 'cors'
import {config} from 'dotenv';
// const {verifyToken} = require('./auth');

config();
app.use(express.json())
app.use(bodyParser.urlencoded({
    parameterLimit: 200000,
    limit: '50mb',
    extended: false
}))
app.use(cors())
import api from './app/routes/index.js'
app.use('/api', api)
// app.use('/api/Admin', apiAdmin)
// app.use('/api', verifyToken, serveStatic(path.join(__dirname, '/Assets')))

export default app;