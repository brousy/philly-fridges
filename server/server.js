const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;



const Fridge = require('./models/fridge');
const Item = require('./models/item');
const User = require('./models/user');

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);
app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });