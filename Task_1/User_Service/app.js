// import eventRoutes from './routes/eventRoutes';
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/personRoutes');
// const eventRoutes =  require('./routes/eventRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
// app.use('/events', eventRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});