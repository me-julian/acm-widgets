import { Router } from 'express';
import testtwoRouter from '@acm-widgets/testtwo/backend/router.js';

const router = Router();
router.use('/testtwo', testtwoRouter);

export default router;
