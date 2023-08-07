import express from 'express';
const router = express.Router();
import auth from '../auth/auth-config.js'

//main functions
import { getContent, getById, getQuery, getRange, getFilter } from '../api/main.controller.js';

router.post('/getContent', auth, getContent);
router.post('/getById', auth, getById);
router.post('/getQuery', auth, getQuery);
router.post('/getRange', auth, getRange);
router.post('/getFilter', auth, getFilter);

//commits functions
import { getCommits } from '../api/commits.controller.js';

router.post('/getCommits', auth, getCommits);

//tormim functions
import { getTormimByMatrimCode, getLastPaymentForTormin } from '../api/tormin.controller.js';

router.post('/getTormimByMatrimCode', auth, getTormimByMatrimCode);
router.post('/getLastPaymentForTormin', auth, getLastPaymentForTormin);

//matrimim functions
import {getMonthDataByMatrim} from '../api/matrim.controller.js';

router.post('/getMonthDataByMatrim', auth, getMonthDataByMatrim)


//login functions
import { login } from '../api/auth.controller.js'

router.post('/login', login);

export default router;