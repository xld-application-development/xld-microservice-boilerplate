import express from 'express';
import bills from './billers/index.route';

const router = express.Router();

router.use('/bills', bills);

export default router;
