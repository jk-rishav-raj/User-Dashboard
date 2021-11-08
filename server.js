const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));


// Define Routes
app.use('/users', require('./routes/users'));
app.use('/profile', require('./routes/profile'));
app.use('/auth', require('./routes/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

