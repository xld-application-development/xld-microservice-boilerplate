import express from 'express';
import { findAllBillersAsync } from '@controllers/08-2022/billers/getBillers.controller';

const router = express.Router();

router.get('/', findAllBillersAsync);

export default router;
