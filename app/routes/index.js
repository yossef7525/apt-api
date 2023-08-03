import express from 'express';
const router = express.Router();
import auth from '../auth/auth-config.js'


import { getContent, getById, getQuery, getRange, getFilter } from '../api/main.controller.js';

router.post('/getContent', auth, getContent);
router.post('/getById', auth, getById);
router.post('/getQuery', auth, getQuery);
router.post('/getRange', auth, getRange);
router.post('/getFilter', auth, getFilter);

import { login } from '../api/auth.controller.js'

router.post('/login', login);

export default router;