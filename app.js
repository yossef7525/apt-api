import express from 'express';
const app = express();
// const apiAdmin = require('./routes/admin/api')
import bodyParser from 'body-parser';
import serveStatic from 'serve-static';
import path from 'path';
import cors from 'cors'
import {config} from 'dotenv';
import api from './app/routes/index.js'
import { Auth } from './app/classes/Auth.js';
// const {verifyToken} = require('./auth');
config();
import './content/state.maneger.js'

function createRouterMiddlewre(){
    app.use(express.json())
    app.use(bodyParser.urlencoded({
        parameterLimit: 200000,
        limit: '50mb',
        extended: false
    }))
    app.use(cors())
    app.use('/api',api)
}
createRouterMiddlewre()
const auth = new Auth()

export default app;