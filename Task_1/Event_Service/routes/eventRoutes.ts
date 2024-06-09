import express from 'express';
import EventController from '../controllers/eventController.js';

const router = express.Router();

router.post('/', EventController.logEvent);
router.get('/:user_id', EventController.getEventsByUserId);

export default router;
