import express from 'express';
const router = express.Router();


import {getContent, getById, getQeury, getRange} from '../api/main.controller.js';

router.post('/getContent', getContent);
router.post('/getById', getById);
router.post('/getQeury', getQeury);
router.post('/getRange', getRange);

export default router;