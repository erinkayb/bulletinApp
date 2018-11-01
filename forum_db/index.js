const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('this is the DB')
})

const post = process.env.PORT || 1234;
app.listen(port);
