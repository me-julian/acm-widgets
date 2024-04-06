import { Router } from 'express';
import testtwoRouter from '@acm-widgets/testtwo/backend/router.js';
import testthreeRouter from '@acm-widgets/testthree/backend/router.js';

const router = Router();
router.use('/testtwo', testtwoRouter);
router.use('/testthree', testthreeRouter);

export default router;
