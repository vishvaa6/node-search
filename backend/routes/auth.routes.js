import express from 'express';
import { fetch, createUser } from '../controller/auth.controller.js';

const router = express.Router();

router.get('/fetch', fetch);
router.post('/create', createUser)


export default router;