const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/entrance', require('./routes/api/entrance'));
app.use('/api/parking', require('./routes/api/parking'));
app.use('/api/payment', require('./routes/api/payment'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));