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

  // Validation
  if (req.body?.comment === undefined) {
    res.status(500);
    res.statusMessage({message: 'Error: comment field may not be undefined'});
  } else {
    res.status(200);
    res.send({message: 'Comment added: ' + JSON.stringify(req.body.comment)});
  }

  res.end();
});

app.listen(port, () => {
  console.log('listening...');
});
