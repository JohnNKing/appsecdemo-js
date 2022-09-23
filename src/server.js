var bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.put('/api/comment', (req, res) => {
  res.send('comment added: ' + req.body.comment);
  res.status(200);
});

app.listen(port, () => {
  console.log('listening...');
});
