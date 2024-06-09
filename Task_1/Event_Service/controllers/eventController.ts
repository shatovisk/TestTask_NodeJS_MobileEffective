import { Request, Response } from 'express';
import EventModel from '../models/eventModel.js';

const EventController = {
  logEvent: async (req: Request, res: Response) => {
    const { user_id,  event_type } = req.body;
    try {
      const event = await EventModel.logEvent(user_id,  event_type);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Unable to log event' });
    }
  },
  getEventsByUserId: async (req: Request, res: Response) => {
    const user_id = parseInt(req.params.user_id, 10);
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    console.log("LOGS", user_id, page, limit)
    try {
      const events = await EventModel.getEvents(user_id, page, limit);
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch events' });
    }
  }
};

export default EventController;
