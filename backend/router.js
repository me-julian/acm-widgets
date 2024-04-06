import { Router } from 'express';
import testtwoRouter from '@acm-widgets/testtwo/backend/router.js';
import kevintestRouter from '@acm-widgets/kevintest/backend/router.js';

const router = Router();
router.use('/testtwo', testtwoRouter);
router.use('/kevintest', kevintestRouter);

export default router;
