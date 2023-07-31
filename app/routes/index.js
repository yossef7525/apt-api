import express from 'express';
const router = express.Router();
import auth from '../auth/auth-config.js'


import { getContent, getById, getQeury, getRange } from '../api/main.controller.js';

router.post('/getContent', auth, getContent);
router.post('/getById', auth, getById);
router.post('/getQeury', auth, getQeury);
router.post('/getRange', auth, getRange);

import { login } from '../api/auth.controller.js'

router.post('/login', login);

export default router;