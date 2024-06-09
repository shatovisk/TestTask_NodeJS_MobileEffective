import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Event service running on port ${PORT}`);
});
