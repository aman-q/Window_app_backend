import { ping, submit, read ,del } from '../controllers/submissionController.js'; // Correct relative path
import express from 'express';

const router = express.Router();

router.get('/api/ping', ping);
router.post('/api/submit', submit);
router.get('/api/read', read);
router.delete('/api/delete',del);

export default router;
