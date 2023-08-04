import express from 'express';
const app = express();
// const apiAdmin = require('./routes/admin/api')
import bodyParser from 'body-parser';
import cors from 'cors'
import  dotenv from 'dotenv';
import api from './app/routes/index.js'
import { Auth } from './app/classes/Auth.js';
// const {verifyToken} = require('./auth');
dotenv.config();

function createRouterMiddlewre() {
    app.use(express.json())
    app.use(bodyParser.urlencoded({
        parameterLimit: 200000,
        limit: '50mb',
        extended: false
    }))
    app.use(cors())
    app.use('/api', api)
   
}
createRouterMiddlewre()
const auth = new Auth()

export default app;