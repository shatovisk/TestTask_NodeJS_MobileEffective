import pool from '../config/database.js';

const EventModel = {
  async logEvent(user_id: number, event_Type: string) {
    const result = await pool.query('INSERT INTO event (user_id, event_type) VALUES ($1, $2) RETURNING *', [user_id, event_Type]);
    return result.rows[0];
  },
  async getEvents(user_id: number, page: number, limit: number) {
    const offset = (page - 1) * limit;
    const result = await pool.query('SELECT * FROM event WHERE user_id = $1 ORDER BY id OFFSET $2 LIMIT $3', [user_id, offset, limit]);
    return result.rows;
  }
};

export default EventModel;
