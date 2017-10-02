const express = require('express');
const app = express();
const store = require('./store.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/', (req, res) => {
  res.send('Got a POST request');
});
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});
app.get('/users/:userId', (req, res) => {
  res.send(req.params);
});

app.route('/events')
  .get((req, res) => {
    console.log('Recuperar eventos' + JSON.stringify(store));
    res.send(JSON.stringify(store))
  })

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
